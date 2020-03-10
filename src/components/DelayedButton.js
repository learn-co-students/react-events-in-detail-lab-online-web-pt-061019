import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        // console.log(event.type);
        // const eventType = event.eventType
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delayed Button</button>
            </div>
        )
    }
}
