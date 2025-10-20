import CarouselComponent from "./components/CarouselComponent";
import Gallery from "./components/Gallery/Gallery";
import EventComponent from "./components/EventComponent";
import { FaRegHeart } from "react-icons/fa";
import OurStory from "./components/story/OurStory";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <OurStory />
      <EventComponent targetDate={"November 2, 2025 11:30:00"} />
      <Gallery />
    </div>
  );
};

export default Home;
