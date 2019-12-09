import React, { Component } from "react";
import MapTrips from "./MapTrips";
import Axios from "axios";

export class TouristSelectTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true, error: false });
    Axios.get("/api/trips/")
      .then(res => this.setState({ trips: res.data.data, loading: false }))
      .catch(err => this.setState({ error: true, loading: false }));
  }

  render() {
    return (
      <div>
        <h1>Select your preferred trip:</h1>
        <MapTrips trips={this.state.trips} />
      </div>
    );
  }
}

export default TouristSelectTrip;
