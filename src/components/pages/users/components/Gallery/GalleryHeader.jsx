export default function GalleryHeader() {
  return (
    <div className="flex my-5 justify-center items-center flex-col gap-5">
      <h1 className="text-[20px] tracking-widest font-medium text-gray-600 font-secondary">
        Our Gallery
      </h1>
      <h1 className="font-primary  text-3xl tracking-widest text-gray-900">
        Best Moments Of Us
      </h1>
      <img src="/images/icon.png" alt="" />
    </div>
  );
}
