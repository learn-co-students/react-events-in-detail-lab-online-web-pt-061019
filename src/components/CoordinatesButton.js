// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  render() {
    return (
      <div className='CoordinatesButton'>
        <button onClick={ e => {
          const arr = [e.clientX, e.clientY];
          this.props.onReceiveCoordinates(arr)
        }}><h1>Coordinate button</h1></button>
      </div>
    )
  }
}
