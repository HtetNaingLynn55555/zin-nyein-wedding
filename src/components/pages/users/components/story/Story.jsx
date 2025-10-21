import { MdFavoriteBorder } from "react-icons/md";
export default function Story() {
  return (
    <div className="grid grid-cols-12 text-center gap-4 pb-7">
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
      <p className="col-start-2 col-span-10 font-secondary leading-7">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        laboriosam nobis repellat voluptas praesentium quia animi, eveniet
        distinctio quas, tenetur magni deleniti, fuga similique quisquam. Minus
        incidunt iusto exercitationem laborum voluptatibus nam nemo, corporis
        laudantium dolor tempora. Praesentium error repellendus nobis cupiditate
        delectus, accusamus adipisci neque enim! Voluptatem, officia aperiam.
      </p>
    </div>
  );
}
