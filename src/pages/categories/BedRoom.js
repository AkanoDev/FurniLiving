import { useState } from "react";
import NavCategory from "./NavCategory";
import { features } from "../../datas/features";

function BedRoom() {
  const bedItems = features.filter((item) => item.category === "bedroom");

  return (
    <div className="h-auto flex flex-col items-center gap-16">
      <NavCategory />
      <div className="w-4/5 px-12">
        <ul className="flex flex-wrap justify-center gap-16 pb-10">
          {bedItems.map((category) => (
            <BedRoomList category={category} key={category.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function BedRoomList({ category }) {
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

export default BedRoom;
