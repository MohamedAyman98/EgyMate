import React, { Component } from "react";
import { Collapse, Button } from "reactstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

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
    return (
      <CardDeck>
        <Card className="text-muted">
          <Button color="secondary" onClick={this.toggle}>
            Click to View
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card.Body>
              <Card.Title>
                <h4>City: {this.props.data.city}</h4>
              </Card.Title>
              <Card.Text>
                Places to visit: {this.props.data.placesToVisit}
              </Card.Text>
              <Card.Text>TourGuide: {this.props.data.tourguide}</Card.Text>
            </Card.Body>
          </Collapse>
        </Card>
      </CardDeck>
    );
  }
}

export default TripCard;
