import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock order tracking - in real app, this would call an API
    setTimeout(() => {
      if (orderId.trim()) {
        setOrderStatus({
          id: orderId,
          status: 'Shipped',
          estimatedDelivery: 'April 25, 2026',
          trackingNumber: 'PANST' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          carrier: 'Delhivery',
          updates: [
            { date: '2026-04-17', status: 'Order Placed', location: 'Mumbai, India' },
            { date: '2026-04-18', status: 'Order Confirmed', location: 'Mumbai, India' },
            { date: '2026-04-19', status: 'Order Processed', location: 'Mumbai, India' },
            { date: '2026-04-20', status: 'Shipped', location: 'Mumbai, India' }
          ]
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="page track-order">
        <header className="page-header">
          <h1>Track Your Order</h1>
          <p>Enter your order ID to check the latest status</p>
        </header>
        <div className="page-content">
          <form onSubmit={handleTrack} className="track-form">
            <div className="form-group">
              <label htmlFor="orderId">Order ID</label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID"
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>

          {orderStatus && (
            <div className="order-status">
              <h2>Order Status</h2>
              <div className="status-card">
                <div className="status-header">
                  <span className="order-id">Order #{orderStatus.id}</span>
                  <span className={`status-badge ${orderStatus.status.toLowerCase()}`}>
                    {orderStatus.status}
                  </span>
                </div>
                <div className="status-details">
                  <p><strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}</p>
                  <p><strong>Tracking Number:</strong> {orderStatus.trackingNumber}</p>
                  <p><strong>Carrier:</strong> {orderStatus.carrier}</p>
                </div>
                <div className="status-timeline">
                  <h3>Order Timeline</h3>
                  <div className="timeline">
                    {orderStatus.updates.map((update, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-date">{update.date}</div>
                        <div className="timeline-content">
                          <h4>{update.status}</h4>
                          <p>{update.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}