import Card from "../story/Card";
import EventType from "./EventType";
import { MdOutlineFacebook } from "react-icons/md";
import { MdAccessAlarms, MdMoreHoriz, MdFavoriteBorder } from "react-icons/md";

// import { IoTimeOutline } from "react-icons/io5";
export default function Event() {
  let paragraph = `Thank you for celebrating our wedding with us.`;

  let data = [
    {
      key: 1,
      title: "Ceremony",
      src: "/images/ring.png",
      time: "7:00 AM - 11:00 AM",
      address: "Shwe Hlan Nyaung Aing",
      icon: <MdAccessAlarms />,
    },

    {
      key: 2,
      title: "Wedding Party",
      src: "/images/plate.png",
      time: "7:00 AM - 11:00 AM",
      address: " Shwe Hlan Nyaung Aing ",
      icon: <MdAccessAlarms />,
    },

    {
      key: 3,
      title: "Photography",
      src: "/images/camera.png",
      time: "7:00 AM - 11:00 AM",
      address: " Shwe Hlan Nyaung Aing ",
      icon: <MdAccessAlarms />,
    },
  ];
  return (
    <div className="grid grid-cols-12 my-7">
      <div className="col-span-12 md:col-start-4 md:col-span-6">
        <Card
          title={"Location & Time"}
          header={"Where & When"}
          paragraph={paragraph}
        />
      </div>
      <div className="col-start-7 text-center">
        <MdFavoriteBorder className="text-gray-600" />
      </div>
      <div className="col-span-12 md:grid mb-5 py-4  md:grid-cols-10 md:col-start-3 md:col-span-9">
        {data.map((item) => (
          <div
            key={item.key}
            className=" mx-5 sm:mx-0 flex gap-8 justify-center items-center my-5 md:col-span-3"
          >
            <EventType data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
