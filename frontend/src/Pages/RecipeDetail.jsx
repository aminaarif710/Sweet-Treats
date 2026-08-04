import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Recipe not found");
        return res.json();
      })
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <h1>{error}</h1>;
  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className="recipe-container">
      <h1>{recipe.name}</h1>

      <section>
        <h2>Ingredients</h2>
        <ul>{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>{recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
      </section>

      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default RecipeDetail;
