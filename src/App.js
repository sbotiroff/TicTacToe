import React from 'react';
import TicTacToeHeader from './components/TicTacToeHeader';
import GameLayout from './components/GameLayout';

import './App.css';

function App() {
  return (
    <div className="App">
      <TicTacToeHeader />
      <GameLayout />
    </div>
  );
}

export default App;
