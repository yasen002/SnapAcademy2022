import "./style/App.css";
import NavBar from "./components/layout/NavBar.jsx";
import Landing from "./components/Landing";
import PopularItems from "./components/PopularItems";
import SpecialDeals from "./components/SpecialDeals";
import PromoteItem from "./components/PromoteItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <PopularItems />
      <SpecialDeals />
      <PromoteItem />
    </div>
  );
}

export default App;
