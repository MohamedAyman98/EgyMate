import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import TouristSelectTrip from "./components/TouristSelectTrip";
import Landing from "./components/Landing";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/selectTrip" component={TouristSelectTrip} />
      <Route exact path="/signin" component={Signin} />
    </BrowserRouter>
  );
}

export default App;
