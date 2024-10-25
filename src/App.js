import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import Header from './components/Header';
import VaiseFuder from './pages/VaiseFuder';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/naoaceito" element={<VaiseFuder/>} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;