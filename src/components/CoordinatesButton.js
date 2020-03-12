// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export class CoordinatesButton extends Component {
  handleClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    return this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
