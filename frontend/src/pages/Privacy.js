import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="page privacy">
        <header className="page-header">
          <h1>Privacy Policy</h1>
          <p>How we protect and use your information</p>
        </header>
        <div className="page-content">
          <section className="privacy-content">
            <div className="data-usage">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely by our payment partners)</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </div>

            <div className="data-usage">
              <h2>How We Use Your Information</h2>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            <div className="security">
              <h2>Security Assurance</h2>
              <p>We implement industry-standard security measures to protect your personal information:</p>
              <ul>
                <li>SSL encryption for all data transmission</li>
                <li>Secure payment processing through Razorpay</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data within our organization</li>
                <li>Secure data storage with regular backups</li>
              </ul>
            </div>

            <div className="data-sharing">
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul>
                <li>With service providers who help us operate our business</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div className="cookies">
              <h2>Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.</p>
            </div>

            <div className="rights">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div className="contact-privacy">
              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>Email: privacy@panstellia.com</li>
                <li>Phone: +91 98765 43210</li>
              </ul>
            </div>

            <div className="policy-updates">
              <h2>Policy Updates</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date.</p>
              <p><em>Last updated: April 17, 2026</em></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}