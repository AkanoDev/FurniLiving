import { useState } from "react";
import { features } from "../datas/features";
import { Link } from "react-router-dom";

export function Featured() {
  return (
    <div className="w-screen h-auto flex flex-col items-center gap-12 py-10 bg-red-200">
      <h1 className="uppercase font-bold tracking-wider text-base text-gray-700">
        Featured Products
      </h1>
      <div className="px-20">
        <ul className="flex flex-wrap justify-center gap-12 gap-x-8">
          {features.map((furniture) => (
            <FeaturedList features={furniture} key={furniture.id} />
          ))}
        </ul>
      </div>
      <Link to="/otheritem">
        <button>More...</button>
      </Link>
    </div>
  );
}

function FeaturedList({ features }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <li
        className="list-none flex items-center flex-col h-auto w-52 py-3 border border-slate-200 hover:border-slate-600 transition ease-in-out duration-150 cursor-pointer text-gray-600"
        onClick={() => addItemToCart(features)}
      >
        <img
          src={features.image}
          alt={features.name}
          className="object-cover h-40 w-40"
        />
        <h3 className="mt-4 capitalize font-semibold">{features.name}</h3>
        <em>₱{features.price}</em>
        <p>{features.star}</p>
      </li>
    </>
  );
}
