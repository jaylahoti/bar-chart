import React, { Component } from 'react';

export default class Bar extends Component {

  render(){
    const { percent, color } = this.props;

    return(
        <div className="bar" style={{ width: `${percent}%`, background: `${color}` }} >
          <div className="hoverbox">{percent.toPrecision(4)}</div>
        </div>
    )
  }
}
