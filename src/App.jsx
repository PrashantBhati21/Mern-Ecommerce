import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes wrapped inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="productlisting" element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Authentication routes (outside the Layout, if needed) */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
