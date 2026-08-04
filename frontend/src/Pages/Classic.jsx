// src/pages/Classic.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Classic = () => {
  const navigate = useNavigate();

  // helper to open recipe by id
  const openRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <main className="container recipe-list">
      <h1>Classic Desserts</h1>

      <div className="grid" id="recipeList">
        <div className="card" onClick={() => openRecipe("peach-cake")}>
          <img src="/image/peachcake.jpg" alt="Peach Cake" />
          <h3>Peach Cake</h3>
          <p>A beautiful, fresh Peach Cake made from scratch.</p>
        </div>

        <div className="card" onClick={() => openRecipe("sticky-date-pudding")}>
          <img src="/image/stickydatepudding.jpg" alt="Sticky Date Pudding" />
          <h3>Sticky Date Pudding</h3>
          <p>
            A super easy Sticky Date Pudding recipe with LOADS of gooey caramel
            sauce.
          </p>
        </div>

        <div className="card" onClick={() => openRecipe("custard")}>
          <img src="/image/custard.jpg" alt="Homemade Custard" />
          <h3>Homemade Custard</h3>
          <p>Quick and easy, this creamy egg custard tastes delicious.</p>
        </div>

        <div className="card" onClick={() => openRecipe("lemon-pound-cake")}>
          <img src="/image/lemonpoundcake.webp" alt="Lemon Pound Cake" />
          <h3>Lemon Pound Cake</h3>
          <p>The loveliest Lemon Pound Cake with a two-ingredient lemon glaze.</p>
        </div>

        <div className="card" onClick={() => openRecipe("oatmeal-cookies")}>
          <img
            src="/image/oatmealchocolatechipcookies.jpg"
            alt="Oatmeal Chocolate Chip Cookies"
          />
          <h3>Oatmeal Chocolate Chip Cookies</h3>
          <p>
            Perfect Oatmeal Chocolate Chip Cookies with golden brown edges and a
            soft, chewy centre.
          </p>
        </div>

        <div className="card" onClick={() => openRecipe("lime-coconut-cake")}>
          <img src="/image/limecoconutcake.jpg" alt="Lime Coconut Cake" />
          <h3>Lime Coconut Cake</h3>
          <p>
            A buttery Coconut Loaf Cake made with toasted coconut, coconut cream
            and fresh lime zest.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Classic;
