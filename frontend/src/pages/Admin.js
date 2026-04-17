import { useState } from "react";
import { db, storage } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Admin() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const upload = async () => {
    if (!data.name || !data.price || !data.category || !file) {
      alert('Please fill all fields and select image');
      return;
    }

    try {
      setUploading(true);
      const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await addDoc(collection(db, "products"), {
        name: data.name,
        price: +data.price,
        category: data.category,
        image: url,
        stock: data.stock || 10
      });

      alert("Product added successfully!");
      // Reset form
      setData({});
      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="admin">
      <h2>Add Product</h2>
      <input 
        placeholder="Name" 
        value={data.name || ''}
        onChange={e=>setData({...data,name:e.target.value})}
      />
      <input 
        placeholder="Price" 
        type="number" 
        value={data.price || ''}
        onChange={e=>setData({...data,price:+e.target.value})}
      />
      <input 
        placeholder="Category" 
        value={data.category || ''}
        onChange={e=>setData({...data,category:e.target.value})}
      />
      <input 
        placeholder="Stock (optional)" 
        type="number" 
        onChange={e=>setData({...data,stock:+e.target.value})}
      />
      <input type="file" accept="image/*" onChange={handleImage}/>
      {preview && <img src={preview} alt="Preview" className="preview" />}
      <button onClick={upload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Add Product'}
      </button>
    </div>
  );
}
