import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about us/About.jsx";
import Home from "./components/home/Home.jsx";
import Subscribe from "./components/sunbscribe/Subscribe.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createPlan" element={<Subscribe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
