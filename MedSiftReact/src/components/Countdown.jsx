import React, { useState, useEffect } from 'react';

function Countdown({ targetDate }) {

  const calculate = () => {
    const diff = new Date(targetDate).getTime() - Date.now();


    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div>🎉 Released!</div>;

  return (
    <>
    <div id="countdown-container" className="frosted lighting">
     <h1 className="glow-more">Countdown to Release</h1>
      <p id="countdown-data">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
    </div>
     </>
 );
}
export default Countdown;