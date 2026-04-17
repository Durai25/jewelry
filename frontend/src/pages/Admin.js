import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Admin() {
  const { user, logout, login } = useAuth();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [prodRes, ordRes] = await Promise.all([
        axios.get('http://localhost:5000/api/products'),
        axios.get('http://localhost:5000/api/orders')
      ]);
      setProducts(prodRes.data);
      setOrders(ordRes.data);
    } catch (error) {
      console.error('Fetch error', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginEmail, loginPass);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const upload = async () => {
    if (!data.name || !data.price || !data.category || !data.desc || !file) {
      alert('Please fill all fields and select image');
      return;
    }
    setLoading(true);
    try {
      const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await axios.post('http://localhost:5000/api/products', {
        name: data.name,
        price: Number(data.price),
        category: data.category,
        description: data.desc,
        image: url,
        stock: Number(data.stock) || 10,
        sale: !!data.sale,
        createdAt: new Date().toISOString()
      });
      alert('Product added successfully!');
      setData({});
      setFile(null);
      setPreview(null);
      fetchData();
    } catch (error) {
      alert('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Delete this product?')) {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchData();
    }
  };

  if (!user) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Admin Email" 
            value={loginEmail} 
            onChange={e => setLoginEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={loginPass} 
            onChange={e => setLoginPass(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <section className="admin-add">
        <h3>Add New Product</h3>
        <input 
          placeholder="Product Name" 
          value={data.name || ''} 
          onChange={e => setData({ ...data, name: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={data.price || ''} 
          onChange={e => setData({ ...data, price: Number(e.target.value) })}
        />
        <select 
          value={data.category || ''} 
          onChange={e => setData({ ...data, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Chains">Chains</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
        </select>
        <textarea 
          placeholder="Description" 
          value={data.desc || ''} 
          onChange={e => setData({ ...data, desc: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Stock Quantity" 
          value={data.stock || ''} 
          onChange={e => setData({ ...data, stock: Number(e.target.value) })}
        />
        <label>
          On Sale: <input 
            type="checkbox" 
            checked={!!data.sale} 
            onChange={e => setData({ ...data, sale: e.target.checked })}
          />
        </label>
        <input type="file" accept="image/*" onChange={handleImage} />
        {preview && <div className="preview-container">
          <img src={preview} alt="Preview" className="preview-image" />
        </div>}
        <button onClick={upload} disabled={loading}>
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </section>

      <section className="admin-products">
        <h3>Products ({products.length})</h3>
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="product-item">
                <img src={p.image} alt={p.name} />
                <div>
                  <h4>{p.name}</h4>
                  <p>₹{p.price.toLocaleString()}</p>
                  <p>{p.category} • Stock: {p.stock}</p>
                  <p>{p.description?.slice(0, 50)}...</p>
                </div>
                <button className="delete-btn" onClick={() => deleteProduct(p.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="admin-orders">
        <h3>Recent Orders ({orders.length})</h3>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="orders-table">
            {orders.map((o) => (
              <div key={o.id} className="order-item">
                <span>ID: {o.id.slice(0,8)}...</span>
                <span>Total: ₹{o.total?.toLocaleString()}</span>
                <span>Payment: {o.paymentId}</span>
                <span>Date: {o.timestamp ? new Date(o.timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
