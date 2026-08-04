import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("🟢 Login response:", data);

      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("activeUser", data.user.email);
        localStorage.setItem("username", data.user.username);
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      alert("Server error! Please try again.");
    }
  };

  return (
    <section className="lrbody">
      <main className="auth-container">
        <div className="logo">
          <i className="fa-solid fa-cookie-bite"></i> Sweet Treats
        </div>

        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </main>
    </section>
  );
};

export default Login;
