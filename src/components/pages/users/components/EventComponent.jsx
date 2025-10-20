import Countdown from "./Countdown";
export default function EventComponent() {
  return (
    <div className="bg-gray-800 relative">
      <img
        className="  top-0 min-w-full h-28 object-cover "
        src="/images/event.jpg"
        alt=""
      />
      <div className="absolute  top-0  w-full h-28 flex gap-3 justify-center items-center">
        <div className="flex flex-col items-center">
          <Countdown time={20} />
          Days
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={30} />
          Hours
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={30} />
          Minutes
        </div>
        <div className="flex flex-col items-center">
          <Countdown time={30} />
          Seconds
        </div>
      </div>
    </div>
  );
}
