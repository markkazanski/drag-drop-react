import React, { Component } from 'react';

class Window extends Component {
    state = {
        height: 300,
        width: 300,
        top: 100,
        left: 500

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
                left: (this.state.mouseX + (prevState.mouseX - this.state.mouseX)) - 150, 
                top: (this.state.mouseY + (prevState.mouseY - this.state.mouseY)) - 150 
            };
        });
    };

    _onDragEnd = event => {
        //console.log("drag end: " + event.screenX);
        this.setState({
            mouseX: event.screenX, 
            mouseY: event.screenY, 
            left: event.screenX, 
            top: event.screenY
        });
    };

    _onDragStart = event => {
        this.setState({
            //left: event.screenX - this.state.width/2,
            //top: event.screenY - this.state.height/2
            //left: (event.screenX - 500),
            //top: (event.screenY - 150)
        });
    };

  render() {
    return (
      <div draggable="true" className="window" onDragStart={this._onDragStart} onDragEnd={this._onDragEnd} onDrag={this._onDrag} onMouseMove={this._onMouseMove.bind(this)} style={{ height: this.state.height, width: this.state.width , position:"absolute", top: this.state.top, left: this.state.left, backgroundColor:"red" }}></div>
    );
  }
}

export default Window;
