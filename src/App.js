import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ProVal from "./proValue";
import ContextValue from "./contextValue";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="row">
            <div class="column">
              <h4>Share the data using property</h4>
              <ProVal />
            </div>
            <div class="column">
              <h4>Share the data using React Context APi</h4>
              <ContextValue />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
