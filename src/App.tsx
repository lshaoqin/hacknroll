import React from 'react';
import Game from './views/game';
import './App.css';
import Leaderboard from './Leaderboard';
import LeaderBoardList from './Leaderboard';
import HandleStats from './HandleStats';
import HandleFirstInstance from './FirstInstance';

function App() {
  return (
    <div className="App">
      <HandleFirstInstance />
    </div>
  );
}

export default App