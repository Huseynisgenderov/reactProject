import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not found/NotFound";
import Product from "./pages/Product/Product";
//components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
