import React, { Component } from "react";
import { Button } from "reactstrap";

export class TouristView extends Component {
  state = {
    dropdownOpen: false
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      selectValue: "-"
    });
  };

  handleChange = e => {
    this.setState({ selectValue: e.target.value });
  };

  onClick = e => {};

  render() {
    return (
      <div>
        <h3>Select a city</h3>
        <select value={this.state.selectValue} onChange={this.handleChange}>
          <option value="-">-</option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Hurghada">Hurghada</option>
          <option value="Sharm el Sheikh">Sharm el Sheikh</option>
          <option value="Luxor">Luxor</option>
          <option value="Aswan">Aswan</option>
        </select>
        <h3> </h3>
        <Button color="primary" onClick={this.onClick}>
          OK
        </Button>{" "}
      </div>
    );
  }
}

export default TouristView;
