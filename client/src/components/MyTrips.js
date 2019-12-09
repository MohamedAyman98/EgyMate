import React, { Component } from "react";
import axios from "axios";
import LandingNavbar from "./LandingNavBar";
import { ListGroupItem } from "react-bootstrap";
import MapTrips from "./MapTrips";

export class MyTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
      user: {}
    };
  }

  componentDidMount() {
    const id = "5de94e7948c3d44057a67d63";
    axios
      .get(`/api/users/${id}`)
      .then(res => res.data.data)
      .then(user => this.setState({ user: user.data }));
    if (this.state.user.type === "Tourist") {
      axios
        .get("/api/trips/tourist" + this.state.id)
        .then(res => this.setState({ trips: res.data.data }));
    } else {
      axios
        .get("/api/trips/tourguide" + this.state.id)
        .then(res => this.setState({ trips: res.data.data }));
    }
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
