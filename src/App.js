import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
//components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
