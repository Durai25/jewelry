import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "We ship within India in 3-7 business days. International shipping takes 7-14 business days depending on the destination."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return window for unused items in their original packaging. Please see our Returns & Refund Policy for complete details."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all PANSTELLIA jewelry is crafted with genuine gold, diamonds, and gemstones. Each piece comes with a certificate of authenticity."
    },
    {
      question: "Do you offer customization?",
      answer: "Yes, we offer custom engraving and personalization services. Contact us for more details."
    },
    {
      question: "How do I care for my jewelry?",
      answer: "Store jewelry in a cool, dry place away from direct sunlight. Clean with a soft cloth and avoid harsh chemicals. Professional cleaning recommended every 6 months."
    },
    {
      question: "Do you offer warranty?",
      answer: "Yes, all PANSTELLIA pieces come with a lifetime warranty against manufacturing defects."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you'll receive tracking information via email once your order ships. You can also track your order on our Track Order page."
    }
  ];

  return (
    <>
      <Header />
      <div className="page faq">
        <header className="page-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about PANSTELLIA jewelry</p>
        </header>
        <div className="page-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}