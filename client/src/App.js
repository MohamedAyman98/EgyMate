import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import TouristView from "./components/TouristView";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <TouristView />
    </div>
  );
}

export default App;
