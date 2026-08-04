import React from "react";

const About = () => {
  return (
    <>

      <main className="container about-page">
        <h1>About Sweet Treats</h1>
        <p className="intro">
          Sweet Treats is a dessert-focused recipe website dedicated to making
          life a little sweeter! From quick and easy bakes to indulgent
          classics, our goal is to inspire everyone — from beginner bakers to
          seasoned chefs — to create desserts that bring joy to every occasion.
        </p>

        <section className="about-story">
          <div className="story-image">
            <img src="/image/about.webp" height="300" width="400" alt="Dessert Table" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, Sweet Treats started as a small passion project by
              dessert lovers who wanted to share the joy of baking with the world.
              What began with a handful of cupcake recipes has now grown into a
              collection of sweets, treats, and everything in between.
            </p>
            <p>
              We believe desserts should be fun, approachable, and filled with
              love — whether it’s a two-ingredient cookie or a decadent cake.
            </p>
            <p>
              Created By Momina Mubasher and Amina Arif under the great guidance of Mr. Abo Bakar Aslam.
            </p>
          </div>
        </section>

        {/* TEAM / AUTHOR DETAILS */}
        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/image/g1.jpg" alt="Amina Arif" className="avatar"/>
              <h3>Amina Arif</h3>
              <p>Founder & Recipe Creator</p>
              <p>Email: amina@example.com</p>
            </div>
            <div className="team-member">
              <img src="/image/g2.jpg" alt="Momina Mubasher" className="avatar"/>
              <h3>Momina Mubasher</h3>
              <p>Co-Founder & Photographer</p>
              <p>Email: momina@example.com</p>
            </div>
          </div>
        </section>

        {/* MAP LOCATION WITHOUT CONTAINER */}
        <section className="map-location">
          <h2>Our Location</h2>
          <iframe
            title="Sweet Treats Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0000000000005!2d74.0977!3d32.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f7e5b1e0b0001%3A0x0000000000000000!2sGujrat%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

      </main>

    </>
  );
};

export default About;
