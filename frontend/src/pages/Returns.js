import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Returns() {
  return (
    <>
      <Header />
      <div className="page returns">
        <header className="page-header">
          <h1>Returns & Refund Policy</h1>
          <p>Our commitment to your satisfaction</p>
        </header>
        <div className="page-content">
          <section className="returns-policy">
            <div className="return-window">
              <h2>7-Day Return Window</h2>
              <p>You have 7 days from the date of delivery to return your PANSTELLIA jewelry for a full refund or exchange.</p>
            </div>

            <div className="return-conditions">
              <h2>Return Conditions</h2>
              <ul>
                <li>Items must be unused and in their original packaging</li>
                <li>Jewelry must be in the same condition as received</li>
                <li>Original tags, certificates, and documentation must be included</li>
                <li>Custom or personalized items are not eligible for return</li>
                <li>Sale items may be subject to different return policies</li>
              </ul>
            </div>

            <div className="damaged-items">
              <h2>Damaged or Defective Items</h2>
              <p>If you receive a damaged or defective item, please contact us immediately. We will arrange for a replacement or full refund at no cost to you.</p>
            </div>

            <div className="refund-process">
              <h2>Refund Process</h2>
              <ol>
                <li>Contact our customer service team with your order details</li>
                <li>Package the item securely in its original packaging</li>
                <li>Ship the item to our return address (shipping label provided)</li>
                <li>Once received and inspected, your refund will be processed within 5-7 business days</li>
                <li>Refunds are issued to the original payment method</li>
              </ol>
            </div>

            <div className="return-address">
              <h2>Return Address</h2>
              <p>
                PANSTELLIA Returns<br />
                Luxury Mall, Bandra<br />
                Mumbai - 400050<br />
                India
              </p>
            </div>

            <div className="contact-support">
              <h2>Need Help?</h2>
              <p>Contact our customer service team:</p>
              <ul>
                <li>Email: returns@panstellia.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>WhatsApp: +91 98765 43210</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}