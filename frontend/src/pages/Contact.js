import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send email API
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page contact">
      <header className="page-header">
        <h1>Contact PANSTELLIA</h1>
        <p>We're here to help you find the perfect piece</p>
      </header>
      <div className="page-content">
        <div className="contact-container">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>info@panstellia.com</p>
                <span>We respond within 24 hours</span>
              </div>
              <div className="contact-method">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
                <span>Mon-Sat: 10 AM - 8 PM IST</span>
              </div>
              <div className="contact-method whatsapp">
                <h3>WhatsApp</h3>
                <p>+91 98765 43210</p>
                <span>Instant responses</span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="address">
              <h3>Visit Our Store</h3>
              <p>
                PANSTELLIA<br />
                Luxury Mall, Bandra<br />
                Mumbai - 400050<br />
                Maharashtra, India
              </p>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <ul>
                <li>Monday - Saturday: 10:00 AM - 8:00 PM</li>
                <li>Sunday: 11:00 AM - 6:00 PM</li>
                <li>Public Holidays: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="faq-link">
          <p>Looking for quick answers? Check our <a href="/faq">FAQ page</a> for common questions.</p>
        </div>
      </div>
    </div>
  );
}

