import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export interface AppProps { name: string; }

type State = {
};

class App extends React.Component<AppProps, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
// const App = (props: AppProps) => <p>{props.name}</p>;

export default App;
