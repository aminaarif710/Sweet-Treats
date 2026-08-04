import React, { useState } from "react";

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "" });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Contact error:", error);
      setStatus("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <>
      {/* PAGE HEADING */}
      <section className="heading">
        <h3>Contact Us</h3>
      </section>

      {/* CONTACT INFO */}
      <section className="contact1">
        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>Our Number</h3>
          <p>+92-26673678</p>
          <p>+92-36726495</p>
        </div>

        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>Our Email</h3>
          <p>SweetTreats@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Address</h3>
          <p>Gujrat, Pakistan - 50700</p>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="message">
        <div className="form-container">
          <div className="form-image">
            <img src="image/foot.png" alt="Contact Us" />
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <h3>Send us your Query</h3>

              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <br />

              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile*"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
              <br />

              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <br />

              <textarea
                name="message"
                placeholder="Enter details here"
                cols="30"
                rows="10"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <br />

              <input type="submit" value="Send Message" />
            </form>

            {/* status message */}
            {status && <p style={{ marginTop: "10px", color: "#444" }}>{status}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
