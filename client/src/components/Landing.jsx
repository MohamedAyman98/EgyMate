import React, { Component } from "react";
import LandingNavbar from "./LandingNavBar";
import { Button, ButtonToolbar } from "react-bootstrap";

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
                  <b>Egy Mate</b>
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
              a new place in Egypt. <b>To join, Please Register or Login.</b>
            </p>
            <ButtonToolbar>
              <Button variant="info">Register</Button>
              <Button
                href="/Tourist"
                variant="info"
                style={{ marginLeft: "7px" }}
              >
                Login
              </Button>
            </ButtonToolbar>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
