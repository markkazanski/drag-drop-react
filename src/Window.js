import React, { Component } from 'react';
import './Window.css';

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

class Window extends Component {
    state = {
        height: 300,
        width: 200,
        top: 100 + randomIntFromInterval(-20, 20),
        left: 500 + randomIntFromInterval(-20, 20),
        suit: this.props.suit,
        rank: this.props.rank
    };

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
    }

    _onMouseMove(event) {
        this.setState({ 
            mouseX: event.screenX, 
            mouseY: event.screenY 
        });
        
    }

    _onDrag = event => {
        this.setState({ 
            mouseX: event.screenX, 
            mouseY: event.screenY 
        });

        this.setState((prevState) => {
            //console.log( `${prevState.mouseX - this.state.mouseX} , ${prevState.mouseY - this.state.mouseY}`  );
            return {
                left: (this.state.mouseX + (prevState.mouseX - this.state.mouseX)) - (this.state.width / 2), 
                top: (this.state.mouseY + (prevState.mouseY - this.state.mouseY)) - (this.state.height / 2) 
            };
        });
    };

    _onDragEnd = event => {
        //console.log("drag end: " + event.screenX);
        this.setState({
            mouseX: event.screenX, 
            mouseY: event.screenY, 
            left: event.screenX - (this.state.width / 2), 
            top: event.screenY - (this.state.height / 2)
        });
    };

    _onDragStart = event => {
        this.setState({

        });
    };

  render() {
    return (
      <div draggable="true" className="window" onDragStart={this._onDragStart} onDragEnd={this._onDragEnd} onDrag={this._onDrag} onMouseMove={this._onMouseMove.bind(this)} 
        style={{ height: this.state.height, width: this.state.width , top: this.state.top, left: this.state.left }}>
            <div className="suit">{this.state.rank}  {this.state.suit}</div>
        </div>
    );
  }
}

export default Window;
