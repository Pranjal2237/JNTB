import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Enquiry,Product, Blog,Certificates, SingleProduct } from "./pages";
import { Navbar, Footer } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App = () => {
  const [pageViewY, setPageViewY] = useState(null);
  const [activeTitle, setActiveTitle] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageViewY(window.scrollY);
    });
  }, []);

  return (
    <div>
      <Router>
        <Navbar activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
        <Routes>
          <Route path="/" element={<Home setActiveTitle={setActiveTitle} />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path='/products/:product'
            element={
              <Product />
            }
          />
          <Route path="/products/:product/:singleProduct" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
      <a href="#top">
        <div
          className="scroll"
          style={{ visibility: pageViewY >= 300 ? "visible" : "hidden" }}
        >
          <FontAwesomeIcon icon={faArrowUp} color="white" />
        </div>
      </a>
    </div>
  );
};

export default App;
