import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailSent from "./pages/EmailSent";
import Home from "./pages/Home";
import Teste2 from "./pages/Movies";
import ValidateToken from "./pages/ValidateToken";

function App() {
  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
          rel="stylesheet"
        />
      </header>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/email-sent" element={<EmailSent />} />
            <Route path="/validate/:token" element={<ValidateToken />} />
            <Route path="/movies" element={<Teste2 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
