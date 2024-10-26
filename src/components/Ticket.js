import React, { useState, useEffect } from 'react';
import '../styles/FlipTicket.css';

const FlipTicket = ({ tickets }) => {
  const [hoveredTicket, setHoveredTicket] = useState(null); // State to store the hovered ticket details
  const [fadeIn, setFadeIn] = useState(false); // State to manage fade-in effect

  // Handle hover enter
  const handleMouseEnter = (ticket) => {
    setFadeIn(false); // Start fade-out and slide-out
    setTimeout(() => {
      setHoveredTicket(ticket);
      setFadeIn(true); // Start fade-in and slide-in after a brief delay
    }, 200); // Delay to sync with fade-out and slide-out duration
  };

  // Handle hover leave
  const handleMouseLeave = () => {
    setFadeIn(false);
    setTimeout(() => {
      setHoveredTicket(null);
    }, 200);
  };

  return (
    <div className="ticket-display">
      <div className="ticket-list">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="ticket-container"
            onMouseEnter={() => handleMouseEnter(ticket)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ticket-card">
              <div className="ticket-front">
              <img src={ticket.front_ticket} alt="Ticket Front" className="ticket-svg-image" />
              </div>
              <div className="ticket-back">
              <img src={ticket.back_ticket} alt="Ticket Front" className="ticket-svg-image" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display the poster and details of the hovered ticket with fade and slide effect */}
      <div className={`poster-display ${fadeIn ? 'fade-slide-in' : 'fade-slide-out'}`}>
        {hoveredTicket ? (
          <>
            <img src={hoveredTicket.link} alt="Poster" className="poster-image" />
            <h2>{hoveredTicket.title}</h2>
            <p>{hoveredTicket.description}</p>
          </>
        ) : (
          <div className="placeholder">
            
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipTicket;
