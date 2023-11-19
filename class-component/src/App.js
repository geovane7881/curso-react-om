import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // bounding, necessário para que a função tenha o state acessível
  //   this.handlePClick = this.handlePClick.bind(this);

  //   this.state = {
  //     name: 'Geovane Clemente',
  //     counter: 0,
  //   }
  // }
  state = {
    name: 'Geovane Clemente',
    counter: 0,
  }

  // handlePClick() {
  //   // const { name } = this.state;
  //   // console.log(`<p> Cliclado, Olá ${name}`)
  //   this.setState({name: 'Olá Geovane!', counter: 0});    
  // }
  
  // função trocada para arrow, para que seja acessado o this da classe
  handlePClick = () => {
    // const { name } = this.state;
    // console.log(`<p> Cliclado, Olá ${name}`)
    this.setState({name: 'Olá Geovane!', counter: 0});    
  }

  handleAClick = (event) => {
    event.preventDefault();
    this.setState({counter: this.state.counter + 1})
  }

  // Método de renderização chamado sempre que ocorre uma mudança no estado
  render() {
    const { name } = this.state;
    const { counter } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            { name } - { counter }
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é um Link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
