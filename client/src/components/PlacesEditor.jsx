//import axios from "axios";
import React, { Component } from "react";
import { Button, Form, Table, Badge, Modal } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

class PlacesEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorShown: false,
      showRestoreButton: this.props.showRestoreButton ? true : false,
      editTimes: this.props.editTimes ? true : false,
      readOnly: this.props.readOnly ? true : false,
      allPlaces: []
    };

    this.state.initialPlaces = this.props.places
      ? this.placesReassignIndex([...this.props.places])
      : [];

    this.state.places = [...this.state.initialPlaces];

    this.state.allPlaces = [
      {
        name: "Great Pyramids",
        location: "Giza, Egypt",
        tags: ["Culture", "History"],
        lat: 29.9773,
        long: 31.1325
      },
      {
        name: "Nile Cruise",
        location: "Cairo, Egypt",
        tags: ["Nature"],
        lat: 30.0444,
        long: 31.2357
      }
    ];
  }
//   componentDidMount() {
//     axios
//       .get("http://localhost:4000/api/places/")
//       .then(res => {
//         res.data.data.forEach(place => {
//           let parts = [];
//           if (place.address.city && place.address.city !== "")
//             parts.push(place.address.city);
//           if (place.address.state && place.address.state !== "")
//             parts.push(place.address.state);
//           if (place.address.country && place.address.country !== "")
//             parts.push(place.address.country);
//           place.location = parts.join(", ");
//         });
//         this.setState({ allPlaces: res.data.data });
//       })
//       .catch(error => {
//         alert(error.message);
//       });
//   }
  
  placeAdd(place) {
    let newPlace = { ...place };
    if (this.state.editTimes) {
      newPlace.from = "";
      newPlace.to = "";
    }
    let places = [...this.state.places, newPlace];
    this.placesReassignIndex(places);
    this.setState({ places: places, selectorShown: false });
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(places);
    }
  }

  placeRemove(i) {
    let places = this.state.places;
    places.splice(i - 1, 1);
    this.placesReassignIndex(places);
    this.setState({ places: places });
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(places);
    }
  }
  placesReassignIndex(places) {
    let i = 1;
    places.forEach(place => {
      place.i = i++;
      if (this.state.editTimes) {
        if (!place.from) place.from = "";
        if (!place.to) place.to = "";
      }
    });
    return places;
  }
  getFilteredPlaces() {
    let places = this.state.allPlaces;
    return places;
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.selectorShown}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={e => this.setState({ selectorShown: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Select a place
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Search"
              onChange={e => this.setState({ filter: e.target.value })}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {this.getFilteredPlaces().map(place => (
                  <tr>
                    <td>
                      {place.name}{" "}
                      {(
                        <Badge variant="warning" style={{ color: "white" }}>
                          Featured
                        </Badge>
                      )}
                    </td>
                    <td>{place.location}</td>
                    <td>
                      {place.tags.map(tag => (
                        <>
                          <Badge pill variant="info">
                            {tag}
                          </Badge>
                          &nbsp;
                        </>
                      ))}
                    </td>
                    <td>
                      <Button
                        variant="outline-info"
                        size="sm"
                        onClick={e => this.placeAdd(place)}
                      >
                        Add
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={e => this.setState({ selectorShown: false })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        {!this.state.readOnly && (
          <p>
            <Button
              variant="info"
              onClick={e => this.setState({ selectorShown: true})}
            >
              Add Place
            </Button>{" "}
            {this.state.showRestoreButton && (
              <Button
                variant="info"
                onClick={e =>
                  this.setState({
                    places: this.placesReassignIndex([
                      ...this.state.initialPlaces
                    ])
                  })
                }
              >
                Restore Suggested Places
              </Button>
            )}
          </p>
        )}


        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {this.state.editTimes && <th>Schedule</th>}
              <th>Name</th>
              <th>Location</th>
              <th>Tags</th>
              <th>Location</th>
              {!this.state.readOnly && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.places.map(place => (
              <tr>
                <td>{place.i}</td>
                {this.state.editTimes && (
                  <td>
                    <Form.Group>
                      <Form.Label>From</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        readOnly={this.state.readOnly}
                        value={place.from}
                        onChange={e => {
                          place.from = e.target.value;
                          this.setState({ places: this.state.places });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        readOnly={this.state.readOnly}
                        value={place.to}
                        onChange={e => {
                          place.to = e.target.value;
                          this.setState({ places: this.state.places });
                        }}
                      />
                    </Form.Group>
                  </td>
                )}
                <td>
                  {place.name}{" "}
                  {(
                    <Badge variant="warning" style={{ color: "white" }}>
                      Featured
                    </Badge>
                  )}
                </td>
                <td>{place.location}</td>
                <td>
                  {place.tags.map(tag => (
                    <>
                      <Badge pill variant="info">
                        {tag}
                      </Badge>
                      &nbsp;
                    </>
                  ))}
                </td>
                <td style={{ padding: "4px", width: "250px", height: "250px" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyCFgDKwXQAE5sqCpva_n8hYT3XItSMOd5g"
                      }}
                      center={{ lat: place.lat, lng: place.long }}
                      zoom={11}
                      options={{
                        fullscreenControl: false,
                        zoomControl: false,
                        scaleControl: false,
                        rotateControl: false
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          background: "brown",
                          padding: "10px 10px",
                          display: "inline-flex",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          opacity: "0.5",
                          transform: "translate(-50%, -50%)"
                        }}
                        lat={place.lat}
                        lng={place.long}
                      >
                        #{place.i}
                      </div>
                    </GoogleMapReact>
                  </div>
                </td>
                {!this.state.readOnly && (
                  <td>
                    <Button
                      style={{ marginBottom: "5px" }}
                      variant="outline-danger"
                      size="sm"
                      onClick={e => this.placeRemove(place.i)}
                    >
                      Remove
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PlacesEditor;
