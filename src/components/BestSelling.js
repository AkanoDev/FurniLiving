import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const bestselling = [
  {
    image: "./images/best/chair.png",
    name: "Chair",
  },
  {
    image: "./images/best/sofa.png",
    name: "Sofa",
  },
  {
    image: "./images/best/ottoman.png",
    name: "Ottoman",
  },
  {
    image: "./images/best/table.png",
    name: "Table",
  },
];
function BestSelling() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center gap-16 h-auto py-20"
      id="product"
    >
      <h1
        className="uppercase lg:text-2xl text-xl font-semibold tracking-wider"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Best selling product
      </h1>
      <ul className="flex justify-center flex-wrap gap-16">
        {bestselling.map((item) => (
          <BestSellingList item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function BestSellingList({ item }) {
  return (
    <li
      className="flex flex-col items-center gap-4 relative w-48"
      data-aos="slide-up"
      data-aos-duration="1500"
    >
      <div className="bg-light-pink px-5 absolute -top-5 h-28 w-full"></div>
      <img src={item.image} alt={item.name} className="h-32 z-10" />
      <h2 className="font-semibold font-sans">{item.name}</h2>
    </li>
  );
}

export default BestSelling;
