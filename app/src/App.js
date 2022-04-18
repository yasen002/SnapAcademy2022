import React from "react";
import "./style/App.css";
import NavBar from "./components/layout/NavBar.jsx";
import Landing from "./components/Landing";
import PopularItems from "./components/PopularItems";
import SpecialDeals from "./components/SpecialDeals";
import PromoteItem from "./components/PromoteItem";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <PopularItems />
      <SpecialDeals />
      <PromoteItem />
      <Footer />
    </div>
  );
}

export default App;
