import logo from './logo.svg';
import './App.css';
import RTSPStream from './VideoPlayer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <RTSPStream />
    </div>
  );
}

export default App;
