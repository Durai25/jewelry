import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SizeGuide() {
  const chainSizes = [
    { size: '16"', measurement: '40.6 cm', description: 'Choker length, sits close to neck' },
    { size: '18"', measurement: '45.7 cm', description: 'Standard length, versatile for most' },
    { size: '20"', measurement: '50.8 cm', description: 'Classic length, suits V-neck tops' },
    { size: '22"', measurement: '55.9 cm', description: 'Longer length, elegant and modern' },
    { size: '24"', measurement: '61.0 cm', description: 'Extended length, bold statement' },
    { size: '30"', measurement: '76.2 cm', description: 'Extra long, for layering or belts' }
  ];

  const ringSizes = [
    { size: 'US 5', diameter: '15.7 mm', circumference: '49.3 mm' },
    { size: 'US 6', diameter: '16.5 mm', circumference: '51.9 mm' },
    { size: 'US 7', diameter: '17.3 mm', circumference: '54.4 mm' },
    { size: 'US 8', diameter: '18.1 mm', circumference: '57.0 mm' },
    { size: 'US 9', diameter: '18.9 mm', circumference: '59.5 mm' },
    { size: 'US 10', diameter: '19.8 mm', circumference: '62.1 mm' }
  ];

  return (
    <>
      <Header />
      <div className="page size-guide">
        <header className="page-header">
          <h1>Jewelry Size Guide</h1>
          <p>Find your perfect fit with our comprehensive sizing guide</p>
        </header>
        <div className="page-content">
          <section className="sizing-intro">
            <h2>How to Measure</h2>
            <div className="measurement-tips">
              <div className="tip">
                <h3>For Chains & Necklaces</h3>
                <p>Use a flexible measuring tape to measure around your neck where you want the chain to sit. Add 2-3 inches for comfort.</p>
              </div>
              <div className="tip">
                <h3>For Rings</h3>
                <p>Measure the circumference of your finger using a string, then measure the string with a ruler. For best accuracy, measure at the end of the day when fingers are warm.</p>
              </div>
              <div className="tip">
                <h3>For Bracelets</h3>
                <p>Measure your wrist circumference just below the wrist bone. Add 1/2 inch for comfort if you prefer a looser fit.</p>
              </div>
            </div>
          </section>

          <section className="chain-sizes">
            <h2>Chain Length Guide</h2>
            <div className="size-table">
              <div className="table-header">
                <span>Length</span>
                <span>Measurement</span>
                <span>Description</span>
              </div>
              {chainSizes.map((size, index) => (
                <div key={index} className="table-row">
                  <span className="size">{size.size}</span>
                  <span className="measurement">{size.measurement}</span>
                  <span className="description">{size.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="ring-sizes">
            <h2>Ring Size Chart</h2>
            <div className="size-table">
              <div className="table-header">
                <span>US Size</span>
                <span>Diameter (mm)</span>
                <span>Circumference (mm)</span>
              </div>
              {ringSizes.map((size, index) => (
                <div key={index} className="table-row">
                  <span className="size">{size.size}</span>
                  <span className="diameter">{size.diameter}</span>
                  <span className="circumference">{size.circumference}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="sizing-help">
            <h2>Need Help Finding Your Size?</h2>
            <div className="help-options">
              <div className="help-option">
                <h3>Professional Sizing</h3>
                <p>Visit a local jeweler for accurate measurements. Most jewelers provide this service free of charge.</p>
              </div>
              <div className="help-option">
                <h3>Contact Our Experts</h3>
                <p>Our customer service team is here to help. Contact us for personalized sizing assistance.</p>
                <ul>
                  <li>Email: sizing@panstellia.com</li>
                  <li>Phone: +91 98765 43210</li>
                  <li>WhatsApp: +91 98765 43210</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="sizing-notes">
            <h2>Important Notes</h2>
            <ul>
              <li>Ring sizes may vary between manufacturers</li>
              <li>Consider the width of the ring band when sizing</li>
              <li>Wide bands may feel tighter than narrow ones</li>
              <li>If between sizes, we recommend sizing up</li>
              <li>All our jewelry comes with sizing information</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}