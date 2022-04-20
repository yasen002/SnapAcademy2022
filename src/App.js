import React, { useEffect, useState } from "react";
import "./style/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Order from "./components/Order";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
function App() {
  const [warning, setWarning] = useState(false);
  useEffect(() => {
    if (!warning) {
      window.alert(
        "This is not an Official Stix & Straw Restaurant website. For the actual restaurant website please visit: https://stixandstraws.com/ "
      );
      setWarning(true);
    }
  }, [warning]);

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
