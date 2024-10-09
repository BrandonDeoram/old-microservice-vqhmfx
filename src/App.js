import React, { useState, useEffect } from "react";
import "./styles.css";
import anni from "./anni.jpg";
function App() {
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const createHeart = () => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random(),
      fontSize: `${Math.random() * 1.5 + 0.5}rem`,
    });

    setHearts(Array(20).fill().map(createHeart));

    const interval = setInterval(() => {
      setHearts((prev) => [...prev.slice(1), createHeart()]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            opacity: heart.opacity,
            fontSize: heart.fontSize,
          }}
        >
          ❤️
        </div>
      ))}
      <div className="card-container">
        <div className="card">
          <h2>Happy Anniversary!</h2>
          <div className="message">
            <p>Dear Babygirl,</p>
            <p>
              HAPPY 6 YEARS ! Instead of being basic and writting a card decided
              to do a mini website for you :). Past year has been amazing, I
              know we are both still navigating life together, and yes the ring
              will come dw. We have both grown so much within this relationship,
              and lets never stop. No long talk, I love you so much and you know
              i'll always be here for you when you need me. Going to miss you
              when you go on your trip to dr, but ILOVEU AND I CANT WAIT TO GET
              MARRIED TO YOU AND LIVE TOGETHER SO YOU CAN FEED ME :)
            </p>
            <p>Here's to many more years of love, laughter, and happiness.</p>
            <p>Love always,</p>
            <p>BANDON</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
