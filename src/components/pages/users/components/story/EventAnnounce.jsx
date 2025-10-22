import { data } from "../../../../../data";
export default function EventAnnounce() {
  const photo = data.invitionPhoto;

  return (
    <div className="grid grid-cols-12 text-center gap-3 mb-9">
      <div className="col-start-2 rounded-md border-[1px] border-gray-600 col-span-10 md:col-start-2 md:col-span-5">
        <img className="p-5 w-full overflow-hidden" src={photo.src} alt="" />
      </div>
      <div className="col-start-2 flex flex-col justify-around items-center gap-5 py-3 col-span-10 md:col-span-5">
        <h1 className="font-secondary text-gray-600 font-medium text-2xl">
          JOIN US TO CELEBRATE THE WEDDING DAY OF
        </h1>
        <p className="font-primary tracking-widest  text-gray-900 text-3xl">
          Zin & Nyein
        </p>
        <div className="gap-5 flex flex-col justify-between items-center">
          <p className="font-secondary text-gray-600 font-medium text-2xl">
            WHICH IS CELEBRATION ON
          </p>
          <p className="font-primary tracking-widest text-gray-900 text-3xl ">
            2/11/2025
          </p>
        </div>
        <div className="font-secondary text-gray-600 tracking-widest text-2xl">
          7:00 AM - 11:00 AM
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="font-primary text-3xl tracking-widest text-gray-900">
            Shwe Hlan Nyaung Aing
          </p>
          <p className="font-secondary text-gray-600 font-medium text-2xl">
            Meiktila
          </p>
        </div>
      </div>
    </div>
  );
}
