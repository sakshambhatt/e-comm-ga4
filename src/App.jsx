import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/private/Cart";
import Wishlist from "./pages/private/Wishlist";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer style={{ marginTop: "10px" }} />
    </div>
  );
}
