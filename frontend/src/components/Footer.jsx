import React from "react";

function Footer() {
  return (
    <footer>
      <div className="box-img">
        <img src="image/foot.png" alt="footer png" />
      </div>

      <div className="box">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i> Pinterest
        </a>
      </div>

      <div className="box">
        <h3>Quick Links</h3>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <p className="footer-text">
        © 2025 <a href="/">Sweet Treats</a> — Dessert Recipes for Everyday Joy.
      </p>
    </footer>
  );
}

export default Footer;
