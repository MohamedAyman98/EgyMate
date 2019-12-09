import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Container, Nav, Form } from "react-bootstrap";
import LandingNavBar from "./LandingNavBar";
import Footer from "./Footer";
import PlacesEditor from "./PlacesEditor";

export default class MakeTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      maxStep: 0,
      startDate: "",
      endDate: "",
      city: "Cairo",
      price: 5000,
      places: []
    };
  }
  nextStep() {
    if (this.state.step < 1) {
      let newStep = this.state.step + 1;
      this.setState({
        step: newStep,
        maxStep: this.state.maxStep > newStep ? this.state.maxStep : newStep
      });
    } else {
    }
  }

  submit() {
    let trip = {
      city: this.state.city,
      placestoVisit: this.state.places
    };
    axios.post(
      "http://localhost:4000/",
      trip
    );
    //this.props.history.push("/tourist/home");
  }

  render() {
    return (
      <div class="back">
        <br />
        <br />
        <div>
          <LandingNavBar />
          <Container className="pt-5">
            <Card>
              <Card.Header>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link
                      onClick={e => this.setState({ step: 0 })}
                      active={this.state.step === 0}
                    >
                      Basic information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={e => this.setState({ step: 1 })}
                      active={this.state.step === 1}
                      disabled={this.state.maxStep < 1}
                    >
                      Trip places
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              
              <Card.Body>
                <Form action="home">
                  {this.state.step === 0 && (
                    <>
                      <Card.Title>Schedule the trip</Card.Title>
                      <Card.Text>
                        <Form.Group>
                          <Form.Label>Destination</Form.Label>
                          <Form.Control
                            as="select"
                            onChange={e =>
                              this.setState({ city: e.target.value })
                            }
                            defaultValue={this.state.city}
                          >
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Luxor">Luxor</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Start date</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={e =>
                              this.setState({ startDate: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>End date</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={e =>
                              this.setState({ endDate: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Required Budget</Form.Label>
                          <Form.Control
                            type="number"
                            onChange={e =>
                              this.setState({ price: e.target.value })
                            }
                            defaultValue={this.state.price}
                          />
                        </Form.Group>
                      </Card.Text>
                      <Button variant="primary" onClick={e => this.nextStep()}>
                        Next
                      </Button>
                    </>
                  )}
                  {this.state.step === 1 && (
                    <>
                      <Card.Title>Got any preferences?</Card.Title>
                      <Card.Text>
                        Please assign places that will be visited in the trip.
                        <br />
                        <br />
                        <PlacesEditor
                          onPlacesChanged={places =>
                            this.setState({ places: places })
                          }
                        />
                      </Card.Text>
                      <Button variant="primary">
                        Finish
                      </Button>
                    </>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}