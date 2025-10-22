import GalleryHeader from "./GalleryHeader";
import GalleryPhoto from "./GalleryPhoto";
export default function Gallery() {
  return (
    <div id="Gallery" className="grid grid-cols-12 my-5 py-3">
      <div className="col-span-12 md:col-start-3 md:col-end-11">
        <GalleryHeader />
      </div>
      <div className=" col-span-12 md:col-start-2 md:col-end-12 ">
        <GalleryPhoto />
      </div>
    </div>
  );
}
