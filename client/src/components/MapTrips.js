import React, * as react from "react";
import TripCard from "./TripCard";
export class MapTrips extends react.Component {
  render() {
    return this.props.trips.map(trip => {
      return <TripCard data={trip} />;
    });
  }
}
export default MapTrips;
