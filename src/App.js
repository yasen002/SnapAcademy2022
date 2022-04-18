import React, { useEffect } from "react";
import "./style/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Order from "./components/Order";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
function App() {
  useEffect(() => {
    window.alert("This is not an Official Stix & Straw Restaurant website.");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
