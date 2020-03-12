import React, { Component } from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component {
  handleClick = event => {
    let coords = [];
    coords.push(event.clientX, event.clientY);
    this.props.onReceiveCoordinates(coords);
  };
  render() {
    return <button onClick={this.handleClick}></button>;
  }
}
