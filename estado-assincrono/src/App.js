import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      // função que pega o estado anterior e props anteriores
      (prevState, prevProps) => {
        return {
          counter: prevState.counter + prevProps.numberToIncrement
        }
      },
      //callback
      () => { console.log('novo count: ', this.state.counter)})
  }

  render() {
    return (<div className="container">
      <h1>{this.state.counter}</h1>
      <input type='button' onClick={this.handleClick} value="Incrementar"/>
    </div>)
  }
}