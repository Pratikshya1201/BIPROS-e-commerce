import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useState } from "react";
import { Curosel } from "./components/curosel";
import { Footer } from "./components/footer";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
          <Routes>
            <Route
              path="/"
              element={
                <><Curosel /><Shop searchInput={searchInput} setSearchInput={setSearchInput} /><Footer /></>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
