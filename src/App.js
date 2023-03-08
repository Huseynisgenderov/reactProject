import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not found/NotFound";
//components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
