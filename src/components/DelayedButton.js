// Code DelayedButton Component Here
import React, { Component } from 'react';

export class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    return window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default DelayedButton;
