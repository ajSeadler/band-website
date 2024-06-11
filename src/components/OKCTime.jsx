import React, { useState, useEffect } from 'react';

const OKCTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Chicago', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formatter = new Intl.DateTimeFormat([], options);
      const formattedTime = formatter.format(now);
      setTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000); // Update the time every second
    updateTime(); // Call updateTime immediately to show initial time without delay

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <p>OKC <span className="dot"></span> {time}</p>
    </div>
  );
};

export default OKCTime;
