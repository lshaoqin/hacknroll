import React from 'react';
import Game from './views/game';
import './App.css';
import Leaderboard from './Leaderboard';
import LeaderBoardList from './Leaderboard';
import HandleStats from './StatsList';
import HandleFirstInstance from './FirstInstance';

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App