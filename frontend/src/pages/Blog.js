import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Chains: A Complete Guide",
      excerpt: "Discover versatile ways to wear gold chains for different occasions, from casual to formal looks.",
      image: "/api/placeholder/400/250",
      category: "Style Guide",
      readTime: "5 min read",
      date: "April 15, 2026"
    },
    {
      id: 2,
      title: "Jewelry Gifting Ideas for Every Occasion",
      excerpt: "Thoughtful jewelry gifts that show you care. From birthdays to anniversaries, find the perfect piece.",
      image: "/api/placeholder/400/250",
      category: "Gifting",
      readTime: "4 min read",
      date: "April 10, 2026"
    },
    {
      id: 3,
      title: "The Art of Layering Necklaces",
      excerpt: "Master the technique of layering different necklaces to create stunning, personalized looks.",
      image: "/api/placeholder/400/250",
      category: "Style Guide",
      readTime: "6 min read",
      date: "April 5, 2026"
    },
    {
      id: 4,
      title: "Diamond Care: Keeping Your Jewelry Sparkling",
      excerpt: "Essential tips for maintaining the brilliance of your diamond jewelry for years to come.",
      image: "/api/placeholder/400/250",
      category: "Care",
      readTime: "3 min read",
      date: "March 28, 2026"
    },
    {
      id: 5,
      title: "Color Gemstones: Choosing the Right Stone for Your Skin Tone",
      excerpt: "A guide to selecting colored gemstones that complement your skin tone and personal style.",
      image: "/api/placeholder/400/250",
      category: "Style Guide",
      readTime: "5 min read",
      date: "March 20, 2026"
    },
    {
      id: 6,
      title: "The History and Meaning of Birthstone Jewelry",
      excerpt: "Explore the rich tradition of birthstones and their significance in different cultures.",
      image: "/api/placeholder/400/250",
      category: "Education",
      readTime: "7 min read",
      date: "March 15, 2026"
    }
  ];

  return (
    <>
      <Header />
      <div className="page blog">
        <header className="page-header">
          <h1>PANSTELLIA Style Guide & Blog</h1>
          <p>Expert tips, styling advice, and jewelry insights</p>
        </header>
        <div className="page-content">
          <div className="blog-grid">
            {articles.map(article => (
              <article key={article.id} className="blog-card">
                <div className="blog-image">
                  <img src={article.image} alt={article.title} />
                  <span className="category">{article.category}</span>
                </div>
                <div className="blog-content">
                  <h2>{article.title}</h2>
                  <p className="excerpt">{article.excerpt}</p>
                  <div className="blog-meta">
                    <span className="date">{article.date}</span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                  <Link to={`/blog/${article.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-categories">
            <h2>Explore by Category</h2>
            <div className="category-tags">
              <span className="tag">Style Guide</span>
              <span className="tag">Gifting</span>
              <span className="tag">Care</span>
              <span className="tag">Education</span>
            </div>
          </div>

          <div className="newsletter-signup">
            <h2>Stay Inspired</h2>
            <p>Subscribe to our newsletter for the latest style tips and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}