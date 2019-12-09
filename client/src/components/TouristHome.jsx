import React, { Component } from "react";
import LandingNavBar from "./LandingNavBar";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";

class TouristHome extends Component {
  render() {
    return (
      <div>
        <LandingNavBar />
        <header>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/tourist-home1.jpg"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={e => this.props.history.push("/tourist/selectTrip")}
                >
                  Pick a trip
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/tourist-home3.jpg"}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={e => this.props.history.push("/tourist/myTrips")}
                >
                  Upcoming trips
                </h3>
                <p>View your upcoming trips.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </header>
        <section class="py-5">
          <div class="container">
            <h1 class="font-weight-light">Get started with EgyMate!</h1>
            <p class="lead">
              Now traveling around Egypt is made easier with EgyMate, get
              accompanied with our tour guides that will help you visit Egypt's
              magnifecent places and cities.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default TouristHome;
