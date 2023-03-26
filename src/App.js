import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not found/NotFound";
import Product from "./pages/Product/Product";
import SingleProduct from "./pages/Single Product/SingleProduct";
import Register from "./pages/Register/Register";
//components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
//useContext
import { CartProvider } from "./cartContext";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <CartProvider>
        {pathname !== "/cart" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register/>} />
          {/* For hiding navbar on 404 page */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {pathname !== "/cart" && <Footer />}
      </CartProvider>
    </>
  );
};

export default App;
