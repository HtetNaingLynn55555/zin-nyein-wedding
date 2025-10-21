export default function Card({ title, header, paragraph }) {
  return (
    <div className="flex flex-col gap-4  py-3 my-5 justify-center items-center">
      <h1 className="text-[20px] tracking-widest font-medium text-gray-500 font-primary">
        {title}
      </h1>
      <h1 className="text-3xl tracking-widest text-gray-700 font-bold font-primary">
        {header}
      </h1>

      <img src="/images/icon.png" alt="" />
      <p className="text-gray-600 text-xl text-center font-secondary">
        {paragraph}
      </p>
    </div>
  );
}
