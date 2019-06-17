import React, { Component } from 'react';

export default class Line extends Component {

  render(){
    const { left } = this.props;
    return(
      <div
        className="line"
        style={{ left: `${left}%` }}
      />
    )
  }
}
