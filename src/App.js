import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './views/game';
import './App.css';
import Leaderboard from './Leaderboard';
import StatsList from './StatsList';


function App() {
  return (
  <div className="app">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/statistics" element={<StatsList/>} />
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;


