// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  // constructor() {
  //   super()
  //   // this.state.props {
  //   //   onDelayedClick: this.props.onDelayedClick
  //   //   delay: this.props.delay
  //   // }
  //
  // }

  eventClick = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.eventClick}>Delay me!</button>
    )
  }
}
