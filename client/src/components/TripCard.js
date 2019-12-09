import React, { Component } from "react";
import { Collapse, Button } from "reactstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Spinner, Alert } from "react-bootstrap";

export class TripCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return this.state.error ? (
      <Alert className="App" variant="danger">
        Looks like something has gone wrong
      </Alert>
    ) : this.state.loading ? (
      <div className="App">
        <Spinner animation="border" variant="primary" />
      </div>
    ) : (
      <CardDeck>
        <Card className="text-muted">
          <Button color="secondary" onClick={this.toggle}>
            Click to View option
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card.Body>
              <Card.Title>
                <h4>City: {this.props.data.City}</h4>
              </Card.Title>
              <Card.Text>
                Places to visit: {this.props.data.placestoVisit}
              </Card.Text>
              <Card.Text>TourGuide: {this.props.data.TourGuideName}</Card.Text>
              <Card.Text>Price: {this.props.data.price}</Card.Text>
            </Card.Body>
            <Button color="success" margin-left="10rems" onClick={this.onClick}>
              Select
            </Button>{" "}
          </Collapse>
        </Card>
      </CardDeck>
    );
  }
}

export default TripCard;
