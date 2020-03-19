// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = e => {
      const arr = [e.clientX, e.clientY];
      this.props.onReceiveCoordinates(arr)
    }

    render(){
      return (
        <div className='CoordinatesButton'>
          <button onClick={this.handleClick}><h1>Coordinates</h1></button>
        </div>
      )
  }
}
