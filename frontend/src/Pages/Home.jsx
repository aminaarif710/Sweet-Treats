import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🍰 Welcome to Sweet Treats</h1>
          <p>Discover delicious desserts, quick recipes, and custom cakes made with love.</p>
          <Link to="/popular" className="hero-btn">Explore Recipes</Link>
        </div>
      </section>

      {/* Features Section */}
      <main className="container">
        <section className="features">
          <div className="feature-card">
            <img src="image/cc.jpg" alt="Most Popular" />
            <h2><Link to="/popular">Most Popular</Link></h2>
            <p>Our readers’ all-time favorite desserts you can’t miss.</p>
          </div>

          <div className="feature-card">
            <img src="image/fb.webp" alt="Quick and Easy" />
            <h2><Link to="/quick">Quick & Easy</Link></h2>
            <p>Desserts ready in under 30 minutes for instant cravings.</p>
          </div>

          <div className="feature-card">
            <img src="image/nutella-cake.jpg" alt="Two ingredients" />
            <h2><Link to="/two-ingredients">Two Ingredients</Link></h2>
            <p>Minimal ingredients, maximum taste — whip up magic fast!</p>
          </div>
        </section>

      </main>

      {/* Quick Navigation / Header Links */}
      <section className="home-quick-links">
        <h2>Quick Navigation</h2>
        <div className="quick-links-container">
          <div className="quick-link-card">
            <i className="fa-solid fa-info-circle"></i>
            <Link to="/about" className="home-btn">About Us</Link>
          </div>
          <div className="quick-link-card">
            <i className="fa-solid fa-concierge-bell"></i>
            <Link to="/services" className="home-btn">Our Services</Link>
          </div>
          <div className="quick-link-card">
            <i className="fa-solid fa-envelope"></i>
            <Link to="/contact" className="home-btn">Contact Us</Link>
          </div>
          <div className="quick-link-card">
            <i className="fa-solid fa-user"></i>
            <Link to="/dashboard" className="home-btn">Dashboard</Link>
          </div>
        </div>
      </section>

      {/* Short Summaries with Icons */}
      <section className="home-summaries">
         <h2>Short Overview</h2>
        <div className="summary-card">
          <i className="fa-solid fa-concierge-bell"></i>
          <h3>Our Services</h3>
          <p>Create your account, access personalized dashboards, save favorite recipes, plan meals, and generate shopping lists easily.</p>
        </div>
        <div className="summary-card">
          <i className="fa-solid fa-info-circle"></i>
          <h3>About Sweet Treats</h3>
          <p>A dessert-focused website making life sweeter with easy, indulgent recipes for beginners and pros alike.</p>
        </div>
        <div className="summary-card">
          <i className="fa-solid fa-envelope"></i>
          <h3>Contact Us</h3>
          <p>Reach out via email, phone, or send your queries through our contact form. We love hearing from you!</p>
        </div>
        <div className="summary-card">
          <i className="fa-solid fa-user"></i>
          <h3>Dashboard Features</h3>
          <p>Manage kitchen items, shopping lists, meal planner, seasonal ingredients, and recipe suggestions directly from your dashboard.</p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips">
        <h2>Pro Baking Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <i className="fa-solid fa-cookie-bite"></i>
            <h3>Perfect Batter</h3>
            <p>Always bring ingredients to room temperature for the fluffiest texture.</p>
          </div>
          <div className="tip-card">
            <i className="fa-solid fa-temperature-high"></i>
            <h3>Control Temperature</h3>
            <p>Preheat your oven — consistent heat makes your desserts shine.</p>
          </div>
          <div className="tip-card">
            <i className="fa-solid fa-ice-cream"></i>
            <h3>Creative Toppings</h3>
            <p>Top with fruits, cream, or melted chocolate to make every dessert unique!</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Subscribe to Sweet Treats Updates 🍓</h2>
        <p>Get weekly dessert inspiration, seasonal recipes, and baking tips straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}

export default Home;
