import React from "react";


const Services = () => {
  return (
    <>
      <main>
    <div class="services-header">
      <h1>Our Services</h1>
      <p>Explore the tools and features designed to make your dessert journey easy, fun, and delicious!</p>
    </div>

    <section class="services-grid">

      <div class="service-card">
        <h1 class="fa-solid fa-user-plus"></h1>
        <h2>Registration</h2>
        <p>Create your Sweet Treats account to unlock personalized features, save favorites, and track your dessert progress.</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-chart-line"></h1>
        <h2>Dashboard</h2>
        <p>Access your personal dashboard to view saved recipes, recent activity, and customized dessert suggestions.</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-lightbulb"></h1>
        <h2>Suggest Recipe</h2>
        <p>Share your own creative dessert ideas with us — our team will test and feature your recipes on Sweet Treats!</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-calendar-days"></h1>
        <h2>Meal Planner Tool</h2>
        <p>Plan your week’s desserts and meals with our interactive planner — making baking schedules simple and organized.</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-cart-shopping"></h1>
        <h2>Create Shopping List</h2>
        <p>Automatically generate a shopping list from your chosen recipes — so you never miss an ingredient again.</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-book-open-reader"></h1>
        <h2>View Text Tutorials</h2>
        <p>Follow step-by-step written tutorials for every dessert, from quick fixes to professional-level sweets.</p>
      </div>

      <div class="service-card">
        <h1 class="fa-solid fa-seedling"></h1>
        <h2>Seasonal Ingredients</h2>
        <p>Check out what ingredients are fresh and available this month — perfect for planning seasonal desserts!</p>
      </div>

    </section>
  </main>

    </>
  );
};

export default Services;
