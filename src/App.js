import React, { Component } from 'react';
import Graph from './components/graph/Graph';

export default class App extends Component {

  constructor(props){
  		super(props);
          this.state = {
           currencies: [
             {
               currency: 'Dollar',
               rate: 69.83,
               color: 'green'
             },
             {
               currency: 'Euro',
               rate: 78.28,
               color: 'blue'
             },
             {
               currency: 'Canadian Dollar',
               rate: 52.07,
               color: 'red'
             },
             {
               currency: 'Singapore Dollar',
               rate: 50.94,
               color: 'orange'
             },
             {
               currency: 'British Pounds',
               rate: 87.87,
               color: 'cyan'
             },
             {
               currency: 'UAE Dhiram',
               rate: 19.02,
               color: 'yellow'
             }
           ]
         }
}

render(){

    return (
      <div>
        <Graph
            currencies={this.state.currencies}
            graphTitle="Indian Rupee Rate with Foreign Currencies"
        />
      </div>
    );
  }
}
