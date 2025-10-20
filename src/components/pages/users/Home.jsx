import CarouselComponent from "./components/CarouselComponent";
import EventComponent from "./components/EventComponent";
import { FaRegHeart } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <EventComponent targetDate={"November 2, 2025 11:30:00"} />
    </div>
  );
};

export default Home;
