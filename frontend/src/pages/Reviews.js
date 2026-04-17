import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaStar } from 'react-icons/fa';

export default function Reviews() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      review: "Absolutely stunning pieces! The craftsmanship is exceptional and the quality exceeds my expectations. PANSTELLIA has become my go-to for luxury jewelry.",
      product: "Diamond Necklace",
      date: "March 2026"
    },
    {
      name: "Rahul Kumar",
      location: "Delhi, India",
      rating: 5,
      review: "The gold bracelet I purchased is perfect. Great value for money and the customer service was outstanding. Highly recommend!",
      product: "Gold Bracelet",
      date: "February 2026"
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad, India",
      rating: 5,
      review: "Beautiful emerald ring that arrived exactly as shown. The packaging was luxurious and the delivery was prompt. Will definitely shop again.",
      product: "Emerald Ring",
      date: "January 2026"
    },
    {
      name: "Vikram Singh",
      location: "Bangalore, India",
      rating: 4,
      review: "Excellent quality pearls. The earrings are elegant and timeless. Minor delay in delivery but the product quality made up for it.",
      product: "Pearl Earrings",
      date: "December 2025"
    },
    {
      name: "Meera Joshi",
      location: "Pune, India",
      rating: 5,
      review: "The ruby pendant is breathtaking! Perfect for special occasions. PANSTELLIA's attention to detail is remarkable.",
      product: "Ruby Pendant",
      date: "November 2025"
    },
    {
      name: "Arjun Reddy",
      location: "Hyderabad, India",
      rating: 5,
      review: "Outstanding customer service and product quality. The chain I ordered was exactly what I was looking for. Fast shipping too!",
      product: "Gold Chain",
      date: "October 2025"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < rating ? 'star filled' : 'star'} />
    ));
  };

  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <>
      <Header />
      <div className="page reviews">
        <header className="page-header">
          <h1>Customer Reviews & Testimonials</h1>
          <p>Real experiences from our valued customers</p>
          <div className="rating-summary">
            <div className="average-rating">
              <span className="rating-number">{averageRating.toFixed(1)}</span>
              <div className="stars">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="total-reviews">({testimonials.length} reviews)</span>
            </div>
          </div>
        </header>
        <div className="page-content">
          <div className="reviews-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>{testimonial.name}</h3>
                    <span className="location">{testimonial.location}</span>
                  </div>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="review-content">
                  <p className="review-text">"{testimonial.review}"</p>
                  <div className="review-footer">
                    <span className="product">Purchased: {testimonial.product}</span>
                    <span className="date">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="review-stats">
            <h2>Rating Breakdown</h2>
            <div className="stats-grid">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = testimonials.filter(t => t.rating === rating).length;
                const percentage = (count / testimonials.length) * 100;
                return (
                  <div key={rating} className="stat-row">
                    <span className="rating-label">{rating} stars</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="count">({count})</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}