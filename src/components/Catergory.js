import { Link } from "react-router-dom";
import { content } from "../datas/contentdata";

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center h-auto px-5">
      <h1
        className="uppercase  lg:text-2xl text-xl font-semibold tracking-wider"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Category
      </h1>
      <ul className="lg:grid lg:grid-cols-3 flex flex-col flex-wrap gap-3 pt-10 pb-32">
        {content.map((furniture) => (
          <ContentList furnitures={furniture} key={furniture.name} />
        ))}
      </ul>
    </div>
  );
}

function ContentList({ furnitures }) {
  return (
    <Link to="/menucategory">
      <li
        className=" list-none relative cursor-pointer hover:text-white"
        data-aos="slide-up"
        data-aos-duration="1500"
      >
        <div>
          <img
            src={furnitures.image}
            alt={furnitures.image}
            className="object-cover h-56 w-96 hover:brightness-75 transition ease-in 0.15s"
          />
          <h2 className="absolute bottom-2 left-3 uppercase font-bold tracking-wider opacity-60">
            {furnitures.name}
          </h2>
        </div>
      </li>
    </Link>
  );
}
