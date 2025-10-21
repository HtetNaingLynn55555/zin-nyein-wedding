import CarouselComponent from "./components/CarouselComponent";
import Gallery from "./components/Gallery/Gallery";
import Event from "./components/Event/Event";
import EventComponent from "./components/EventComponent";
import { FaRegHeart } from "react-icons/fa";
import OurStory from "./components/story/OurStory";
import Map from "./components/Map";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <OurStory />
      <EventComponent targetDate={"November 2, 2025 11:30:00"} />
      <Gallery />
      <Event />
      <Map />
    </div>
  );
};

export default Home;
