import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    handleOnClick = (event) => {
        return this.props.onReceiveCoordinates([
            event.clientX, 
            event.clientY
        ])
    }

   render(){
       return(
           <button onClick ={this.handleOnClick}>Click Button!</button>
       )
   }
}
