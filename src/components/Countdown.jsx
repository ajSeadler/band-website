import React, { useEffect, useState } from "react";
import { shows } from "./showinfo";
import "../styles/Countdown.css"; // You can style this separately

const Countdown = () => {
  // Find the next show by comparing dates
  const nextShow = shows
    .map((show) => ({
      ...show,
      date: new Date(show.date), // Just use the date field directly
    }))
    .filter((show) => show.date > new Date()) // Filter past shows
    .sort((a, b) => a.date - b.date)[0]; // Sort by date and pick the soonest one

  // Set up countdown logic
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextShow?.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextShow?.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [nextShow]);

  if (!nextShow) return <div>No upcoming shows!</div>;

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">{nextShow.title}</h2>
      <img src={nextShow.image} alt={nextShow.title} className="show-image" />
      <div className="countdown-timer">
        <p>Next Show In:</p>
        <div className="time">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </div>
      <div className="show-info">
        <p>{nextShow.date.toDateString()}</p>
        <p>{nextShow.location}</p>
        <p className="price">{nextShow.price}</p>
      </div>
    </div>
  );
};

function calculateTimeLeft(showDate) {
  const difference = +new Date(showDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default Countdown;
