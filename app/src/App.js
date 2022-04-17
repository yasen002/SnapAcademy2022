import "./style/App.css";
import NavBar from "./components/layout/NavBar.jsx";
import Landing from "./components/Landing";
import PopularItems from "./components/PopularItems";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <PopularItems />
    </div>
  );
}

export default App;
