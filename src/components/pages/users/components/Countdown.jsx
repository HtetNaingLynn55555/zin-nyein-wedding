export default function Countdown({ time }) {
  return (
    <div className=" font-primary text-[16px] md:text-2xl flex justify-center items-center rounded-full w-10 h-10 md:w-10 md:h-10 font-bold border md:border-2  border-[#E6A817]">
      {time}
    </div>
  );
}
