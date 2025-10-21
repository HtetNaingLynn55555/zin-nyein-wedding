import { MdOutlineFacebook } from "react-icons/md";
export default function Bride() {
  return (
    <div className="flex flex-col justify-center my-7 gap-4 py-3.5 items-center">
      <h1 className=" tracking-widest text-3xl text-gray-900 font-primary">
        Aye Nyein Zin
      </h1>
      <img src="/images/icon.png" alt="" />
      <p className="text-xl text-gray-600 text-center font-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        blanditiis enim repellendus illum ea assumenda doloribus delectus
        inventore maxime quasi!
      </p>
      <span className="text-gray-700 text-2xl">
        <MdOutlineFacebook />
      </span>
    </div>
  );
}
