import { FaInstagram } from 'react-icons/fa';

export default function InstagramGallery() {
  const instagramPosts = [
    { id: 1, image: '/api/placeholder/300/300', likes: 1247, comments: 89 },
    { id: 2, image: '/api/placeholder/300/300', likes: 2156, comments: 134 },
    { id: 3, image: '/api/placeholder/300/300', likes: 987, comments: 67 },
    { id: 4, image: '/api/placeholder/300/300', likes: 1876, comments: 112 },
    { id: 5, image: '/api/placeholder/300/300', likes: 1432, comments: 95 },
    { id: 6, image: '/api/placeholder/300/300', likes: 2234, comments: 156 }
  ];

  return (
    <section className="instagram-section">
      <div className="section-header">
        <h2>Follow Us on Instagram</h2>
        <p>@panstelliajewelry</p>
        <a
          href="https://instagram.com/panstelliajewelry"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram /> Follow Us
        </a>
      </div>
      <div className="instagram-grid">
        {instagramPosts.map(post => (
          <div key={post.id} className="instagram-post">
            <img src={post.image} alt="PANSTELLIA Jewelry" />
            <div className="post-overlay">
              <div className="post-stats">
                <span>❤️ {post.likes.toLocaleString()}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}