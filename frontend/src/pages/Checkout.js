import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, removeFromCart, total } = useContext(StoreContext);
  const { user } = useAuth();

  const handlePayment = async () => {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/create-order', { amount: total });

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: 'Luxury Jewels',
        description: 'Premium Jewelry Purchase',
        prefill: {
          name: user?.displayName || 'Customer',
          email: user?.email || '',
        },
        handler: async (response) => {
          // Save order to Firestore
          await axios.post('http://localhost:5000/api/orders', {
            items: cart,
            total,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            customerEmail: user?.email || 'guest',
          });
          alert('Payment successful! Order placed.');
          // Clear cart
          cart.forEach(item => removeFromCart(item.id));
        },
        theme: {
          color: '#000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert('Payment initiation failed');
      console.error(error);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="cart-items">
{cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.qty} × ₹{item.price.toLocaleString()} = ₹{(item.qty * item.price).toLocaleString()}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total: ₹{total.toLocaleString()}</p>
          <button className="pay-btn" onClick={handlePayment}>
            Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
}

