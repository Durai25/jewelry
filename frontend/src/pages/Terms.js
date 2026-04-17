import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <div className="page terms">
        <header className="page-header">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before using our website</p>
        </header>
        <div className="page-content">
          <section className="terms-content">
            <div className="acceptance">
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using PANSTELLIA's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>

            <div className="use-license">
              <h2>Use License</h2>
              <p>Permission is granted to temporarily access the materials on PANSTELLIA's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            </div>

            <div className="user-obligations">
              <h2>User Obligations</h2>
              <ul>
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not interfere with the website's security or functionality</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            <div className="products-services">
              <h2>Products and Services</h2>
              <p>All products are subject to availability. We reserve the right to discontinue any product or change specifications without notice. Prices are subject to change without notice.</p>
            </div>

            <div className="payment">
              <h2>Payment Terms</h2>
              <ul>
                <li>All payments must be made in full at the time of purchase</li>
                <li>We accept payments through secure payment gateways</li>
                <li>Payment information is processed securely and not stored on our servers</li>
                <li>Additional charges may apply for international transactions</li>
              </ul>
            </div>

            <div className="shipping-delivery">
              <h2>Shipping and Delivery</h2>
              <p>Shipping costs and delivery times are clearly stated at checkout. We are not responsible for delays caused by factors beyond our control, including but not limited to weather, customs clearance, or carrier issues.</p>
            </div>

            <div className="returns-refunds">
              <h2>Returns and Refunds</h2>
              <p>Please refer to our Returns & Refund Policy for detailed information about returns, exchanges, and refunds.</p>
            </div>

            <div className="limitation-liability">
              <h2>Limitation of Liability</h2>
              <p>PANSTELLIA shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our products or services.</p>
            </div>

            <div className="intellectual-property">
              <h2>Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of PANSTELLIA and is protected by copyright and trademark laws.</p>
            </div>

            <div class="governing-law">
              <h2>Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.</p>
            </div>

            <div className="changes">
              <h2>Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website.</p>
            </div>

            <div className="contact-terms">
              <h2>Contact Information</h2>
              <p>If you have questions about these Terms & Conditions, please contact us:</p>
              <ul>
                <li>Email: legal@panstellia.com</li>
                <li>Phone: +91 98765 43210</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}