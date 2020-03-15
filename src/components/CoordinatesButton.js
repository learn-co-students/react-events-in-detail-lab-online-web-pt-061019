// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    handleClick = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        this.props.onReceiveCoordinates([x,y])
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Coordinates Button</button>
            </div>
        )
    }
}

export default CoordinatesButton;