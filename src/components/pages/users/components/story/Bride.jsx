import { MdFavoriteBorder } from "react-icons/md";
export default function Bride() {
  return (
    <div className="flex flex-col justify-center my-7 gap-4 py-3.5 items-center">
      <h1 className=" tracking-widest text-3xl text-gray-900 font-primary">
        Aye Nyein Zin
      </h1>
      <img src="/images/icon.png" alt="" />
      <p className="text-xl text-gray-600 leading-7 text-center px-4 sm:px-0 font-secondary">
        " With him, life feels lighter, funnier, and full of meaning. He’s my
        favorite person and my always. "
      </p>
      <span className="text-[#E6A817] text-2xl">
        <MdFavoriteBorder />
      </span>
    </div>
  );
}
