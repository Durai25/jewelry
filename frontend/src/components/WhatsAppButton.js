import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20PANSTELLIA,%20I%20would%20like%20to%20inquire%20about%20your%20jewelry%20collection."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}