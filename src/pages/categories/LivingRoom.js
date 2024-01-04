import { useState } from "react";
import NavCategory from "./NavCategory";

export const livingroom = [
  {
    id: 1,
    image: "./images/livingroom/ezeck-tv-cabinet.jpg",
    name: "ezeck tv cabinet",
    price: 599,
  },
  {
    id: 2,
    image: "./images/livingroom/osmund-ottoman.jpg",
    name: "osmund ottoman",
    price: 599,
  },
  {
    id: 3,
    image: "./images/livingroom/sterling-recliner-sofa.jpg",
    name: "sterling recliner sofa",
    price: 599,
  },
  {
    id: 4,
    image: "./images/livingroom/teemo-side-table.jpg",
    name: "teemo sidetable",
    price: 599,
  },
];
function LivingRoom() {
  return (
    <div className="h-auto flex flex-col items-center gap-16">
      <NavCategory />
      <div className="w-4/5 px-12">
        <ul className="flex flex-wrap justify-center gap-16 pb-10">
          {livingroom.map((category) => (
            <LivingRoomList category={category} key={category.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function LivingRoomList({ category }) {
  const [showButtons, setShowButtons] = useState(false);

  function handleShowButtons() {
    setShowButtons((show) => !show);
  }
  return (
    <li
      className="flex flex-col items-center relative cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="1500"
      onClick={handleShowButtons}
    >
      <img
        src={category.image}
        alt={category.name}
        className="object-cover h-40 w-40"
      />

      {showButtons && (
        <div
          className="bg-light-pink px-5 absolute bottom-10 h-20 w-full flex flex-col justify-center gap-1"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <button className="border border-medium-pink rounded">
            Add to Cart
          </button>
          <button className="bg-red-500 text-white rounded">Buy now</button>
        </div>
      )}
      <h3 className="mt-4 capitalize font-semibold font-sans">
        {category.name}
      </h3>
    </li>
  );
}

export default LivingRoom;
