import React, { Component } from "react";
import MapTrips from "./MapTrips";
import Axios from "axios";
import LandingNavbar from "./LandingNavBar";
import { Spinner } from "react-bootstrap";

export class TouristSelectTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      loading: true,
      error: false,
      selectedTripId: null
    };
  }
  componentDidMount() {
    this.setState({ loading: true, error: false });
    Axios.get("/api/trips/")
      .then(res => this.setState({ trips: res.data.data, loading: false }))
      .catch(err => this.setState({ error: true, loading: false }));
  }

  render() {
    if (this.state.loading)
      return (
        <div className="App">
          <LandingNavbar />
          <Spinner animation="border" variant="primary" />
        </div>
      );
    else
      return (
        <div>
          <LandingNavbar />
          <br />
          <br />
          <h1>Select your preferred trip:</h1>
          <MapTrips trips={this.state.trips} />
        </div>
      );
  }
}

export default TouristSelectTrip;
