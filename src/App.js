import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './views/game';
import './App.css';



function App() {
  return (
  <div className="app">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
