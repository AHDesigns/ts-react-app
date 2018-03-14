import * as React from 'react';
import './style.css';
import HomePage from '../HomePage';

const logo = require('./logo.svg');

export interface AppProps { name?: string; }

type State = {};

export default class App extends React.PureComponent<AppProps, State> {
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