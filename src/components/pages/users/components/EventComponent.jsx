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
        className="  top-0 min-w-full h-55 object-cover "
        src="/images/event.jpg"
        alt=""
      />

      <div className="absolute font-primary tracking-widest text-gray-900 text-3xl flex justify-center items-center top-0 h-20 min-w-full text-center">
        <span>Don’t Miss It !</span>
      </div>
      <div className="absolute font-secondary text-gray-600  top-14  w-full h-35 flex gap-5 justify-center items-center">
        <div className="flex gap-4  flex-col items-center">
          <Countdown time={timeLeft.days} />
          <span> Days</span>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <Countdown time={timeLeft.hours} />
          <span> Hours</span>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <Countdown time={timeLeft.minutes} />
          <span>Minutes</span>
        </div>
        <div className=" hidden  sm:flex gap-4 flex-col items-center">
          <Countdown time={timeLeft.seconds} />
          <span> Seconds</span>
        </div>
      </div>
    </div>
  );
}
