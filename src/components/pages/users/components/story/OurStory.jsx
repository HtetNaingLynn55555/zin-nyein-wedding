import Groom from "./Groom";
import CouplePhoto from "./CouplePhoto";
import Bride from "./Bride";
import Card from "./Card";
export default function OurStory() {
  let paragraph = `“Today we celebrate love, friendship, and forever. We are deeply grateful to have you witness this moment.”`;
  return (
    <div id="Story" className="grid grid-cols-12">
      <div className="col-span-12 md:col-start-4 md:col-span-6">
        <Card
          title={"Save The Date"}
          header={"Our Wedding"}
          paragraph={paragraph}
        />
      </div>
      <div className="col-span-12 md:grid my-5 py-4  md:grid-cols-10 md:col-start-2 md:col-span-10">
        <div className=" grid-cols-12 md:col-span-3">
          <Groom />
        </div>
        <div className=" grid-cols-12 flex justify-center items-center md:col-span-4">
          <CouplePhoto />
        </div>
        <div className=" grid-cols-12 md:col-span-3">
          <Bride />
        </div>
      </div>
    </div>
  );
}
