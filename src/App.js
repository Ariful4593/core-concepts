import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = {
    myName: "Ariful ISLAM",
    roll: "171966"
  }
  var style = {
    color: "red",
    backgroundColor: "yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  <p style={style}> My name is: {name.myName}</p>
      </header>
    </div>
  );
}

export default App;
