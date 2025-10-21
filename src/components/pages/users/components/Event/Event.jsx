import Card from "../story/Card";
export default function Event() {
  let paragraph = `Thank you for coming and attending with our wedding`;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-start-4 md:col-span-6">
        <Card
          title={"Location & Time"}
          header={"Where & When"}
          paragraph={paragraph}
        />
      </div>
      <div className="col-span-12 md:grid my-5 py-4  md:grid-cols-10 md:col-start-2 md:col-span-10">
        <div className=" grid-cols-12 md:col-span-3">Card One</div>
        <div className=" grid-cols-12 flex justify-center items-center md:col-span-4">
          Card Two
        </div>
        <div className=" grid-cols-12 md:col-span-3">Card Three</div>
      </div>
    </div>
  );
}
