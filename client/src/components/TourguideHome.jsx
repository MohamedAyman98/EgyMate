import React, { Component } from "react";
import LandingNavBar from "./LandingNavBar";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
import "../signin.css";

class TourguideHome extends Component {
  render() {
    return (
      <div>
        <LandingNavBar />
        <header>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/tourguide-home4.jpg"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={e =>
                    this.props.history.push("/tourguide/maketrip")
                  }
                >
                  Create Trip
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/tourguide-home2.jpg"}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={e =>
                    this.props.history.push("/tourguide/UpcomingTrips")
                  }
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
            <h1 class="font-weight-light">
              Start your own business with EgyMate!
            </h1>
            <p class="lead">
              Earning money and experience has never been more enjoyable and
              easy. With EgyMate you will contact with a variety of tourists
              from all over the world and help them see the beauty of our
              country by guiding them through places and cities in Egypt.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default TourguideHome;
