import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container nav">
        <div className="logo">
          <i className="fa-solid fa-cookie-bite"></i> Sweet Treats
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services" className="active">Services</Link>

          <div className="dropdown">
            <Link to="#">Categories ▾</Link>
            <div className="dropdown-content">
              <Link to="/popular">Most Popular</Link>
              <Link to="/quick">Quick & Easy</Link>
              <Link to="/two-ingredients">Two-Ingredient Desserts</Link>
              <Link to="/classic">Classic Desserts</Link>
            </div>
          </div>

          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
