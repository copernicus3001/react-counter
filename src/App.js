import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
      super(props);

      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      
      this.state = {
        count: 0
      };
    }

    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count +1
        };
      });
    }

    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count -1
        };
      });
    }

    handleReset() {
      this.setState((prevState) => {
        return {
          count: 0
        };
      });
    }

    render() {
      return (
      <div className="App">
        <p>Licznik: {this.state.count}</p>
        <Button onClick={this.handleAddOne}>+1</Button>
        {' '}
        <Button onClick={this.handleMinusOne}>-1</Button>
        {' '}
        <Button onClick={this.handleReset}>reset</Button>
      </div>
      );
    }
}

export default App;