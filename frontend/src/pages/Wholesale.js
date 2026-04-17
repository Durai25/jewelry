import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';

export default function Wholesale() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    monthlyVolume: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send wholesale inquiry
    alert('Thank you for your inquiry! Our wholesale team will contact you within 24 hours.');
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: '',
      monthlyVolume: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="page wholesale">
        <header className="page-header">
          <h1>Wholesale & Bulk Inquiry</h1>
          <p>Join our network of premium retailers and boutiques</p>
        </header>
        <div className="page-content">
          <section className="wholesale-info">
            <div className="benefits">
              <h2>Why Partner with PANSTELLIA?</h2>
              <div className="benefit-grid">
                <div className="benefit">
                  <h3>Luxury Quality</h3>
                  <p>Authentic gold, diamonds, and gemstones with certificates of authenticity</p>
                </div>
                <div className="benefit">
                  <h3>Competitive Pricing</h3>
                  <p>Wholesale rates designed for healthy profit margins</p>
                </div>
                <div className="benefit">
                  <h3>Fast Delivery</h3>
                  <p>Reliable shipping with tracking for all orders</p>
                </div>
                <div className="benefit">
                  <h3>Marketing Support</h3>
                  <p>Access to high-quality product images and marketing materials</p>
                </div>
                <div className="benefit">
                  <h3>Dedicated Support</h3>
                  <p>Personal account manager and priority customer service</p>
                </div>
                <div className="benefit">
                  <h3>Flexible Terms</h3>
                  <p>Custom payment terms and return policies for established partners</p>
                </div>
              </div>
            </div>

            <div className="requirements">
              <h2>Wholesale Requirements</h2>
              <ul>
                <li>Established retail business (minimum 6 months in operation)</li>
                <li>Valid business registration and tax documents</li>
                <li>Physical retail location or established online presence</li>
                <li>Minimum order value of ₹50,000 per order</li>
                <li>Commitment to authentic luxury jewelry sales</li>
              </ul>
            </div>
          </section>

          <section className="inquiry-form">
            <h2>Submit Your Wholesale Inquiry</h2>
            <p>Fill out the form below and our wholesale team will contact you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="wholesale-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="businessName">Business Name *</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="businessType">Business Type *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select business type</option>
                    <option value="retail-store">Retail Store</option>
                    <option value="boutique">Boutique</option>
                    <option value="online-retailer">Online Retailer</option>
                    <option value="department-store">Department Store</option>
                    <option value="jewelry-chain">Jewelry Chain</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyVolume">Estimated Monthly Volume</label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                  >
                    <option value="">Select volume</option>
                    <option value="under-1lac">Under ₹1,00,000</option>
                    <option value="1-5lac">₹1,00,000 - ₹5,00,000</option>
                    <option value="5-10lac">₹5,00,000 - ₹10,00,000</option>
                    <option value="over-10lac">Over ₹10,00,000</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, target customers, and specific product interests..."
                  rows="5"
                />
              </div>

              <button type="submit" className="submit-btn">Submit Inquiry</button>
            </form>
          </section>

          <section className="contact-info">
            <h2>Alternative Contact Methods</h2>
            <p>Prefer to speak directly with our wholesale team?</p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>wholesale@panstellia.com</p>
              </div>
              <div className="contact-method">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-method">
                <h3>WhatsApp</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}