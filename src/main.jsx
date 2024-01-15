import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "../header/Header.jsx";
import Home from "../home/Home.jsx";
import Button from "../button/Button.jsx";
import Footer from "../footer/Footer.jsx";
import About from "../about us/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <App /> */}
      </Routes>
    </Router>{" "}
    <Footer />
  </React.StrictMode>
);
