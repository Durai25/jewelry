import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shipping() {
  return (
    <>
      <Header />
      <div className="page shipping">
        <header className="page-header">
          <h1>Shipping & Delivery</h1>
          <p>Learn about our shipping policies and delivery timelines</p>
        </header>
        <div className="page-content">
          <section className="shipping-info">
            <div className="delivery-timeline">
              <h2>Delivery Timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3>India</h3>
                  <p>3-7 business days</p>
                  <span>Free shipping on orders above ₹2,000</span>
                </div>
                <div className="timeline-item">
                  <h3>International</h3>
                  <p>7-14 business days</p>
                  <span>Shipping costs calculated at checkout</span>
                </div>
              </div>
            </div>

            <div className="couriers">
              <h2>Courier Partners</h2>
              <div className="courier-list">
                <div className="courier">
                  <h3>India</h3>
                  <ul>
                    <li>Delhivery</li>
                    <li>Blue Dart</li>
                    <li>DTDC</li>
                  </ul>
                </div>
                <div className="courier">
                  <h3>International</h3>
                  <ul>
                    <li>DHL</li>
                    <li>FedEx</li>
                    <li>UPS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tracking">
              <h2>Order Tracking</h2>
              <p>Once your order ships, you'll receive an email with tracking information. You can also track your order status on our <a href="/track-order">Track Order</a> page using your order ID.</p>
            </div>

            <div className="shipping-notes">
              <h2>Important Notes</h2>
              <ul>
                <li>Orders are processed within 1-2 business days</li>
                <li>Delivery times may vary during peak seasons</li>
                <li>Additional customs duties may apply for international orders</li>
                <li>We are not responsible for delays caused by customs clearance</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}