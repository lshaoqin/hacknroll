import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './views/game';
import POPUP from './POPUP';
import './App.css';


function App() {
  return (
  <div className="app">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/test" element={<POPUP />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
