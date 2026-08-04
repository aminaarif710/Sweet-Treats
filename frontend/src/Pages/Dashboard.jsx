import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [kitchenItem, setKitchenItem] = useState("");
  const [shoppingItem, setShoppingItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [suggestedRecipe, setSuggestedRecipe] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("activeUser");
    console.log("Loaded email from localStorage:", email);

    if (!email) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    // Fetch user data from backend
    fetch(`http://localhost:5000/api/user/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found!");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load user data:", err);
        alert("Error loading user data!");
        navigate("/login");
      });

      fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched recipes from DB:", data);
        setAllRecipes(data);
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, [navigate]);

  // 🧁 Add kitchen item
  const addKitchenItem = async () => {
    if (!kitchenItem.trim()) return;

    const updatedItems = [...user.kitchenItems, kitchenItem];
    await updateUser({ kitchenItems: updatedItems, shoppingList: user.shoppingList });
    setUser({ ...user, kitchenItems: updatedItems });
    setKitchenItem("");
  };

  // 🛒 Add shopping item
  const addShoppingItem = async () => {
    if (!shoppingItem.trim()) return;

    const updatedList = [...user.shoppingList, shoppingItem];
    await updateUser({ kitchenItems: user.kitchenItems, shoppingList: updatedList });
    setUser({ ...user, shoppingList: updatedList });
    setShoppingItem("");
  };

  // ❌ Remove kitchen item
  const removeKitchenItem = async (index) => {
    const updated = user.kitchenItems.filter((_, i) => i !== index);
    await updateUser({ kitchenItems: updated, shoppingList: user.shoppingList });
    setUser({ ...user, kitchenItems: updated });
  };

  // ❌ Remove shopping item
  const removeShoppingItem = async (index) => {
    const updated = user.shoppingList.filter((_, i) => i !== index);
    await updateUser({ kitchenItems: user.kitchenItems, shoppingList: updated });
    setUser({ ...user, shoppingList: updated });
  };

  // 🔄 Update user in MongoDB
  const updateUser = async (body) => {
    await fetch(`http://localhost:5000/api/user/${user.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

 const suggestRecipe = () => {
    if (!user || allRecipes.length === 0) return;

    const available = user.kitchenItems.map((i) => i.toLowerCase());

    // Find matching recipes based on available ingredients
    const possibleRecipes = allRecipes.filter((r) =>
      r.ingredients.some((ing) =>
        available.some((a) => ing.toLowerCase().includes(a))
      )
    );

    // Fallback: random recipe if no match found
    const recipesToPickFrom = possibleRecipes.length > 0 ? possibleRecipes : allRecipes;
    const randomRecipe =
      recipesToPickFrom[Math.floor(Math.random() * recipesToPickFrom.length)];

    setSuggestedRecipe(randomRecipe);
  };




  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    localStorage.removeItem("username");
    navigate("/login");
  };

  if (loading) return <h2>Loading dashboard...</h2>;

  return (
    <>
      <main className="dashboard">
        <h1>
          Welcome, <span>{user.username}</span>!
        </h1>
        

        {/* 🍴 Kitchen Items */}
        <section>
          <h2>🍴 Kitchen Items</h2>
          <input
            type="text"
            placeholder="Add kitchen item..."
            value={kitchenItem}
            onChange={(e) => setKitchenItem(e.target.value)}
          />
          <button onClick={addKitchenItem}>Add</button>
          <ul>
            {user.kitchenItems.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <button onClick={() => removeKitchenItem(i)}>x</button>
              </li>
            ))}
          </ul>
        </section>

        {/* 🛒 Shopping List */}
        <section>
          <h2>🛒 Shopping List</h2>
          <input
            type="text"
            placeholder="Add shopping item..."
            value={shoppingItem}
            onChange={(e) => setShoppingItem(e.target.value)}
          />
          <button onClick={addShoppingItem}>Add</button>
          <ul>
            {user.shoppingList.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <button onClick={() => removeShoppingItem(i)}>x</button>
              </li>
            ))}
          </ul>
        </section>

        {/* 🌸 Seasonal Ingredients */}
        <section>
          <h2>🌸 Seasonal Ingredients</h2>
          <p>View list of ingredients available this season/month — coming soon!</p>
        </section>

        <section id="suggestSection" className="suggest-section">
        <h2>📅 Meal Planner Tool</h2>
        <h3>🍳 Aj Kia Pakaey?</h3>
        <button onClick={suggestRecipe}>Suggest Recipe</button>

        {suggestedRecipe && (
          <div id="suggestedRecipe" className="suggested-recipe">
            <h3>{suggestedRecipe.name}</h3>
            <p>
              <strong>Ingredients:</strong>{" "}
              {suggestedRecipe.ingredients.join(", ")}
            </p>
            <h4>Steps:</h4>
            <ol>
              {suggestedRecipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}
        </section>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>


      </main>

    </>
  );
};

export default Dashboard;
