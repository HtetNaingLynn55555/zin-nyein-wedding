import { Carousel, Image } from "antd";

import { data } from "../../../../data";
import Item from "antd/es/list/Item";
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
  let coverPhoto = data.cover;

  return (
    <div id="Home" className="relative h-screen w-full">
      <Carousel
        effect="fade"
        pauseOnHover={false}
        dots={false}
        autoplaySpeed={2500}
        speed={2000}
        className="w-full h-full"
        autoplay
      >
        {coverPhoto.map((Item) => (
          <div key={Item.key}>
            <img
              className="w-full h-screen object-cover object-center"
              src={Item.src}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
