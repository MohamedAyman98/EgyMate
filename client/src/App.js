import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import TouristSelectTrip from "./components/TouristSelectTrip";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import MakeTrip from "./components/MakeTrip";
import TourguideHome from "./components/TourguideHome";
import TouristHome from "./components/TouristHome";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/tourist/selectTrip" component={TouristSelectTrip} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/tourguide/maketrip" component={MakeTrip} />
      <Route exact path="/tourguide/home" component={TourguideHome} />
      <Route exact path="/tourist/home" component={TouristHome} />
    </BrowserRouter>
  );
}

export default App;
