import React from 'react';
import logo from './logo.svg';
import './App.css';

import Queue from './features/Queue/Queue'
import Seat from './features/Seat/Seat';

function App() {
  return (
    <div className="App">
      <Queue />
      {/* <Seat /> */}
    </div>
  );
}

export default App;
