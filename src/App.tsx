import * as React from 'react';
import './App.css';
import HomePage from './containers/HomePage';

const logo = require('./logo.svg');

export interface AppProps { name: string; }

type State = {};

class App extends React.Component<AppProps, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}
export default App;
