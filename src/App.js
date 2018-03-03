import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Window from './Window.js';
import Header from './Header.js';
import DealButton from './DealButton.js';

const suits = ["♠", "♥", "♦", "♣"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];

function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

class App extends Component {

  state = {
    cards: [
      1
    ]
  };

  _DealButton = event => {
    this.setState({
      cards: this.state.cards.concat(1)
    });
    console.log(event);
  };

  render() {
    return (
      <div className="App">
        <Header heading="Drag and Drop" />
        <button id="dealbutton" onClick={this._DealButton} >
            Deal Card
        </button>
        <Window key="0" rank={ranks[randomIntFromInterval(0,12)]} suit={suits[randomIntFromInterval(0,3)]} />

        {this.state.cards.map( (card, index) => (
          <Window key={index} rank={ranks[randomIntFromInterval(0,12)]} suit={suits[randomIntFromInterval(0,3)]} />
        ))}
      
      </div>
    );
  }
}

export default App;
