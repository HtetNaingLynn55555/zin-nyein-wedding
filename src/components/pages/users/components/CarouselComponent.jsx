import { Carousel, Image } from "antd";

const contentStyle = {
  margin: 0,
  height: "460px",
  flexShrink: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  padding: "0",
};
export default function CarouselComponent() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="relative h-screen w-full">
      <Carousel
        fade
        dots={false}
        autoplaySpeed={2000}
        speed={1000}
        className="w-full h-full"
        afterChange={onChange}
        autoplay
      >
        <div>
          <img
            className="w-full h-screen object-cover object-center"
            src="/public/images/coupleOne.jpg"
          />
        </div>
        <div>
          <img
            className="w-full  h-screen  object-cover object-center"
            src="/public/images/coupleTwo.jpg"
          />
        </div>
        <div>
          <img
            className="w-full  h-screen  object-cover object-center"
            src="/public/images/coupleThree.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}
