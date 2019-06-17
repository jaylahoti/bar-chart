import React, { Component } from 'react';
import Line from '../chartcomponents/Line';
import BarText from '../chartcomponents/BarText';
import Markers from '../chartcomponents/Markers';
import Bar from '../chartcomponents/Bar';

export default class Graph extends Component {

  state = {
    isHovered: {}
  }

  renderLines() {
    return Array(10).fill(null).map((el, i) => (
      <Line
        left={i * 10}
        key={i}
      />
    ))
  }

   handleMouseEnter = (index) => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  handleMouseLeave = (index) => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  render(){
    const { currencies } = this.props;
    const { isHovered } = this.state;
    return(
      <div className="graph-wrapper">
        <h2> { this.props.graphTitle } </h2>

        <div className="graph">
          <BarText currencies={this.props.currencies} />

          <div id="ssbar" className="bar-lines-container">
            { this.renderLines() }
            { currencies.map((currency, index) => {
                const percent = (currency.rate / 100) * 100;
                return (
                  <Bar
                    onMouseEnter={() => this.handleMouseEnter(index)}
                    onMouseLeave={() => this.handleMouseLeave(index)}
                    percent={percent}
                    isHovering={isHovered[index]}
                    key={currency.currency}
                    color={currency.color}
                    currency={currency}
                  />
                )
              })
            }
          </div>

          <div style={{ width: '12%' }} />
          <Markers />
        </div>

      </div>
    )
  }
}
