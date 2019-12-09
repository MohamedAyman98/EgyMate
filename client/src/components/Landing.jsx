import React, { Component } from "react";
import LandingNavbar from "./LandingNavBar";
import { Button, ButtonToolbar } from "react-bootstrap";
import Footer from "./Footer";

export class Landing extends Component {
  render() {
    return (
      <div>
        <LandingNavbar />
        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 text-center">
                <h1
                  class="font-weight-light"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: "70px",
                    textAlign: "center"
                  }}
                >
                  <b>EgyMate</b>
                </h1>
                <p class="lead">A great facility for your trips in Egypt</p>
              </div>
            </div>
          </div>
        </header>

        <section class="py-5">
          <div class="container">
            <h2 class="font-weight-light">Welcome !</h2>
            <p>
              EgyMate is a website for both tourists and tour guides. We offer a
              unique service that matches tourists with independant tour guides,
              removing the stress of having to plan your own trip when visiting
              a new place in Egypt. <b>To continue, Please state whether you are a tourist or a tourguide.</b>
            </p>
            <ButtonToolbar>
              <Button variant="info" href="/tourist/home">I am a tourist</Button>
              <Button
                href="/tourguide/home"
                variant="info"
                style={{ marginLeft: "7px" }}
              >
                I am a tourguide
              </Button>
            </ButtonToolbar>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Landing;
