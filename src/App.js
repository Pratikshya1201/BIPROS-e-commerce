import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useState } from "react";
import { Curosel } from "./components/curosel";
import { Footer } from "./components/footer";
import { Budgetbazaar } from "./components/budgetbazaar";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";
import { Checkout } from "./pages/checkout/checkout";
import PaymentForm from "./pages/checkout/PaymentForm";
import { Profile } from "./components/profile";
import { AddressForm } from "./pages/checkout/AddressForm";
import { Successful } from "./pages/checkout/successful";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
           <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><Curosel /><Shop searchInput={searchInput} setSearchInput={setSearchInput} /><Budgetbazaar /><Footer /></>
              }
            />
            <Route path="/cart" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><Cart /></>} />
            <Route path="/checkout" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><Checkout /></>} />
            <Route path="/payment" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><PaymentForm /></>} />
            <Route path="/profile" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><Profile /></> } />
            <Route path="/address" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><AddressForm /></> } />
            <Route path="/successful" element={<><Navbar searchInput={searchInput} setSearchInput={setSearchInput} /><Successful /></> } />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
