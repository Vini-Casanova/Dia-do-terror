import React from "react";
import '../styles/Event.css';

const Event = () => {
  return (
    <div class="event-container">
        <h1 class="event-title"> Dia do terror !! </h1>
        <img className="event-image" src={require('../assets/halloweenspooktacular-768x512.jpg' )} alt={"Halloween event"}/>
    </div>
  );
};

export default Event;