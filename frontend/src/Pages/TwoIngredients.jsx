// src/pages/TwoIngredientDesserts.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const TwoIngredientDesserts = () => {
  const navigate = useNavigate();

  // Function to go to the recipe detail page
  const openRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <main className="container recipe-list">
      <h1>Two-Ingredient Desserts</h1>

      <div className="grid" id="recipeList">
        <div className="card" onClick={() => openRecipe("nutella-cake")}>
          <img src="/image/nutella-cake.jpg" alt="Nutella Cake" />
          <h3>Nutella Cake</h3>
          <p>Eggs + Nutella = gooey perfection.</p>
        </div>

        <div className="card" onClick={() => openRecipe("peanut-butter-cake")}>
          <img src="/image/Peanut-Butter.jpg" alt="Peanut Butter Cake" />
          <h3>Peanut Butter Cake</h3>
          <p>Moist cake with just peanut butter and eggs.</p>
        </div>

        <div className="card" onClick={() => openRecipe("banana-cake")}>
          <img src="/image/banana.jpg" alt="Banana Cake" />
          <h3>Banana Cake</h3>
          <p>Ripe bananas + eggs for a fluffy, healthy treat.</p>
        </div>

        <div className="card" onClick={() => openRecipe("soda-cake")}>
          <img src="/image/soda.jpg" alt="Soda Cake" />
          <h3>Soda Cake</h3>
          <p>Boxed mix + soda = light, quick cake hack.</p>
        </div>

        <div className="card" onClick={() => openRecipe("chocolate-cake")}>
          <img src="/image/chocolate cream.jpg" alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>Rich, moist dessert made with cocoa or melted chocolate.</p>
        </div>

        <div className="card" onClick={() => openRecipe("vanilla-cupcakes")}>
          <img src="/image/vanilla-cupcakes.jpg" alt="Vanilla Cupcakes" />
          <h3>Quick Vanilla Cupcakes</h3>
          <p>Fluffy and light cupcakes topped with creamy frosting.</p>
        </div>
      </div>
    </main>
  );
};

export default TwoIngredientDesserts;
