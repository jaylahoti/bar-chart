import React, { Component } from 'react';

export default class BarText extends Component {

  render(){
    const { currencies } = this.props;
    return(
      <div className="bar-text-content">
        {
          currencies.map((currency) => (
            <div className="text">
              {currency.currency }
            </div>
          ))
        }
        <div className="y-axis">Y - Axis</div>
      </div>
    )
  }
}
