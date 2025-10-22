import { MdFavoriteBorder } from "react-icons/md";
export default function Story() {
  return (
    <div id="Invitation" className="grid grid-cols-12 text-center gap-4 pb-7">
      <h1 className="col-start-2 col-span-10 font-primary text-gray-900 tracking-widest text-3xl">
        Our Story
      </h1>
      <div className="w-6/12 md:w-3/12 col-start-2 gap-4 mx-auto col-span-10 flex items-center justify-center">
        <div className="p-[1px] w-2/4 bg-black opacity-30 "></div>
        <div className="text-xl">
          <MdFavoriteBorder />
        </div>
        <div className="p-[1px] w-2/4 bg-black opacity-30 "></div>
      </div>
      <p className="col-start-2 col-span-10 text-gray-600 font-secondary pb-5 leading-7">
        "We met at Meiktila University of Economics, not knowing that a simple
        hello would change our lives. What began as friendship soon grew into
        love — a love that has carried us through laughter, distance, and time.
        After years of sharing dreams and building memories together, we are now
        ready to begin our next chapter — as husband and wife."
      </p>
    </div>
  );
}
