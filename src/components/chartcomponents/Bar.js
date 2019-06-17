import React, { Component } from 'react';

export default class Bar extends Component {

  render(){
    const { percent, color, onMouseEnter, onMouseLeave, isHovering } = this.props;
    
    return(
        <div className="bar" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ width: `${percent}%`, background: `${color}` }} >
          <div className="hoverbox">{isHovering && percent.toPrecision(4)}</div>
        </div>
    )
  }
}
