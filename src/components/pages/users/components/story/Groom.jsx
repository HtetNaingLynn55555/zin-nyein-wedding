import { MdFavoriteBorder } from "react-icons/md";
export default function Groom() {
  return (
    <div className="flex flex-col justify-center my-7 gap-4 py-3.5 items-center">
      <h1 className="text-3xl text-gray-900 font-primary tracking-widest">
        Zin Min Thant
      </h1>
      <img src="/images/icon.png" alt="" />
      <p className="text-xl text-gray-600 leading-7 px-4 sm:px-0 text-center font-secondary">
        " When I’m with her, everything feels right — simple moments turn into
        memories I never want to forget."
      </p>
      <span className="text-[#E6A817] text-2xl">
        <MdFavoriteBorder />
      </span>
    </div>
  );
}
