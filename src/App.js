import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/shop";
import Explore from "./components/Explore/explore";
import About from "./components/About/about";
import Rewards from "./components/Rewards/rewards";
import Contact from "./components/Contact/contact";
import Profile from "./components/Profile/profile";
import Cart from "./components/Cart/cart";

function App() {
  return (
    <BrowserRouter className="background">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/rewards" element={<Rewards />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/account" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
