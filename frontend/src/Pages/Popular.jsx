// src/pages/PopularRecipes.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PopularRecipes = () => {
  const navigate = useNavigate();

  // Navigate to recipe details page
  const openRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <main className="container recipe-list">
      <h1>Most Popular Recipes</h1>
      <div className="grid" id="recipeList">

        <div className="card" onClick={() => openRecipe("chocolate-cake")}>
          <img src="/image/cc.jpg" alt="Chocolate Cake" />
          <h3>Classic Chocolate Cake</h3>
          <p>Rich, moist, and topped with silky frosting.</p>
        </div>

        <div className="card" onClick={() => openRecipe("strawberry-cheesecake")}>
          <img src="/image/Strawberry-Cheesecake.webp" alt="Strawberry Cheesecake" />
          <h3>Strawberry Cheesecake</h3>
          <p>Velvety cheesecake with fresh strawberry topping.</p>
        </div>

        <div className="card" onClick={() => openRecipe("macarons")}>
          <img src="/image/Macaroons.avif" alt="Macarons" />
          <h3>French Macarons</h3>
          <p>Delicate, colorful, and filled with buttercream.</p>
        </div>

        <div className="card" onClick={() => openRecipe("vanilla-cupcakes")}>
          <img src="/image/vanilla-cupcakes.jpg" alt="Vanilla Cupcakes" />
          <h3>Vanilla Bean Cupcakes</h3>
          <p>Light and fluffy cupcakes with creamy frosting.</p>
        </div>

        <div className="card" onClick={() => openRecipe("bomboloni")}>
          <img src="/image/Bomboloni.jpg" alt="Bomboloni" />
          <h3>Bomboloni</h3>
          <p>Italian doughnuts: A Taste of Sweet Indulgence.</p>
        </div>

        <div className="card" onClick={() => openRecipe("eclairs")}>
          <img src="/image/Parisian Eclairs.jpg" alt="Parisian Eclairs" />
          <h3>Parisian Eclairs</h3>
          <p>
            Easy Chocolate Croissants are simple, flaky pastries made by wrapping
            pieces of chocolate.
          </p>
        </div>

      </div>
    </main>
  );
};

export default PopularRecipes;
