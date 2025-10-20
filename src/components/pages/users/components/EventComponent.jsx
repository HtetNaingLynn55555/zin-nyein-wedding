import Countdown from "./Countdown";
import { useState, useEffect } from "react";
export default function EventComponent({ targetDate }) {
  const countDownTimer = () => {
    let difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(countDownTimer());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = countDownTimer();
      setTimeLeft(newTimeLeft);
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gray-800 relative">
      <img
        className="  top-0 min-w-full h-28 object-cover "
        src="/images/event.jpg"
        alt=""
      />
      <div className="absolute  top-0  w-full h-28 flex gap-3 justify-center items-center">
        <div className="flex flex-col items-center">
          <Countdown time={timeLeft.days} />
          Days
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={timeLeft.hours} />
          Hours
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={timeLeft.minutes} />
          Minutes
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={timeLeft.seconds} />
          Seconds
        </div>
      </div>
    </div>
  );
}
