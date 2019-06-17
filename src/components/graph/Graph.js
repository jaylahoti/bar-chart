import React, { Component } from 'react';
import Line from '../chartcomponents/Line';
import BarText from '../chartcomponents/BarText';
import Markers from '../chartcomponents/Markers';
import Bar from '../chartcomponents/Bar';

export default class Graph extends Component {

  state = {}

  renderLines() {
    return Array(10).fill(null).map((el, i) => (
      <Line
        left={i * 10}
        key={i}
      />
    ))
  }

  renderBars() {
    const { currencies } = this.props;

    return currencies.map((currency) => {
      const percent = (currency.rate / 100) * 100;
      return (
        <Bar
          percent={percent}
          key={currency.currency}
          color={currency.color}
          currency={currency}
        />
      )
    });
  }

  render(){
    return(
      <div className="graph-wrapper">
        <h2> { this.props.graphTitle } </h2>

        <div className="graph">
          <BarText currencies={this.props.currencies} />

          <div id="ssbar" className="bar-lines-container">
            { this.renderLines() }
            { this.renderBars() }
          </div>

          <div style={{ width: '12%' }} />
          <Markers />
        </div>

      </div>
    )
  }
}
