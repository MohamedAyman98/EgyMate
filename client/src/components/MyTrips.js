import React, { Component } from "react";
import axios from "axios";
import LandingNavbar from "./LandingNavBar";
import { ListGroupItem } from "react-bootstrap";
import MapTrips from "./MapTrips";

export class MyTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    axios.get("api/trips/tourist/5de94e7948c3d44057a67d63").then(res => {
      this.setState({ trips: res.data.data });
    });
  }

  render() {
    return (
      <div>
        <LandingNavbar />
        <br />
        <br />
        <h1>My trips</h1>
        <MapTrips trips={this.state.trips} />
      </div>
    );
  }
}

export default MyTrips;
