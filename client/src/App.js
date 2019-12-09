import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import TouristSelectTrip from "./components/TouristSelectTrip";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import MakeTrip from "./components/MakeTrip";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/selectTrip" component={TouristSelectTrip} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/maketrip" component={MakeTrip} />
    </BrowserRouter>
  );
}

export default App;
