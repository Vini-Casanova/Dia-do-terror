import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teste2 from './pages/Movies';

function App() {
  
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>
            </head>
            <Router>
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Teste2 />} />
                </Routes>
              </div>
            </Router>
          </>
          );
}

          export default App;