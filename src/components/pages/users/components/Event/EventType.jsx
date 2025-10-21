export default function EventType({ data }) {
  return (
    <>
      <div className="w-full flex   border-[#E6A817] py-6  mx-2 flex-col justify-center items-center gap-3 rounded-2xl overflow-hidden shadow-lg">
        <img
          className="w-15 h-14 "
          src={data.src}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 text-center">
          <div className="font-primary text-gray-900 tracking-widest text-2xl mb-2">
            {data.title}
          </div>
          <div className="flex text-center justify-center items-center gap-2">
            <div className="pb-1 text-gray-600">{data.icon}</div>
            <p className="text-gray-700 font-secondary tracking-widest text-base">
              {data.time}
            </p>
          </div>
          <div className="text-center font-secondary text-gray-700 my">
            {data.address}
          </div>
        </div>
      </div>
    </>
  );
}
