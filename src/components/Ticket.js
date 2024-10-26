import React, { useState, useEffect } from "react";
import "../styles/FlipTicket.css";

const FlipTicket = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [fadeIn, setFadeIn] = useState(false); // State to manage fade-in effect
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTicketInteraction = (ticket) => {
    if (isMobile) {
      setSelectedTicket(selectedTicket === ticket ? null : ticket);
    }
  };

  const handleMouseEnter = (ticket) => {
    if (!isMobile) {
      setFadeIn(false); // Start fade-out and slide-out
      setTimeout(() => {
        setSelectedTicket(ticket);
        setFadeIn(true); // Start fade-in and slide-in after a brief delay
      }, 200); // Delay to sync with fade-out and slide-out duration
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setFadeIn(false);
      setTimeout(() => {
        setSelectedTicket(null);
      }, 200);
    }
  };

  return (
    <div className={`ticket-display ${isMobile ? "mobile" : ""}`}>
      <div className="ticket-list">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className={`ticket-container ${selectedTicket === ticket ? "selected" : ""}`}
            onClick={() => handleTicketInteraction(ticket)}
            onMouseEnter={() => handleMouseEnter(ticket)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ticket-card">
              <div className="ticket-front">
                <img
                  src={ticket.front_ticket}
                  alt="Ticket Front"
                  className="ticket-svg-image"
                />
              </div>
              <div className="ticket-back">
                <img
                  src={ticket.back_ticket}
                  alt="Ticket Back"
                  className="ticket-svg-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`poster-display ${isMobile ? "" : fadeIn ? "fade-slide-in" : "fade-slide-out"}`}
      >
        {selectedTicket && (
          <div className="poster-display">
            <img
              src={selectedTicket.link}
              alt="Poster"
              className="poster-image"
            />
            <h2>{selectedTicket.title}</h2>
            <p>{selectedTicket.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipTicket;
