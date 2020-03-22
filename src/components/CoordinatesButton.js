// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  // constructor(props) {
  //   super()
  //   this.props {
  //     onReceiveCoordinates: props.onReceiveCoordinates
  //   }
  // }

//   constructor(props) {
//   super()
//   this.state = {
//     color: props.value
//   } // ...define initial state with a key of 'color' set to the 'value' prop
// }

  eventClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }

  render() {
    return (
      <button onClick={this.eventClick}>Let's Coordinate</button>
    )
  }
}
