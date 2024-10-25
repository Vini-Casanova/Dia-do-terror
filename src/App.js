import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import Header from './components/Header';
import VaiseFuder from './pages/VaiseFuder';
import Teste2 from './pages/Teste2';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            {/* <Route path="/naoaceito" element={<VaiseFuder/>} /> */}
            <Route path="/naoaceito" element={<Teste2/>} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;