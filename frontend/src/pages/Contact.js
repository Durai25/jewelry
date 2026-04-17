import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send email API
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page contact">
      <header className="page-header">
        <h1>Contact Us</h1>
      </header>
      <div className="page-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <textarea 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>Email:</strong> info@luxuryjewels.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Luxury Mall, Bandra, Mumbai - 400050</p>
        </div>
      </div>
    </div>
  );
}

