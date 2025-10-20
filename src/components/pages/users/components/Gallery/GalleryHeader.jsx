export default function GalleryHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="font-secondary text-gray-600 text-xl">Our Gallery</h1>
      <h1 className="font-primary  text-3xl tracking-widest text-gray-900">
        Best Moments Of Us
      </h1>
      <img src="/images/icon.png" alt="" />
    </div>
  );
}
