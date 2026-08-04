import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Motto from "./components/Motto";
import Home from "./Pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Popular from "./pages/Popular";
import Quick from "./pages/Quick";
import TwoIngredients from "./pages/TwoIngredients";
import Classic from "./Pages/Classic";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RecipeDetail from "./Pages/RecipeDetail";
import "./App.css";

function App() {
   const hideLayoutPaths = ["/login", "/register", "/dashboard"];
  return (
    <>
      <Header />
      <Motto />

      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/quick" element={<Quick />} />
        <Route path="/two-ingredients" element={<TwoIngredients />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
