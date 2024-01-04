import { Link } from "react-router-dom";

function Content() {
  return (
    <div
      className="flex justify-center items-center py-28 "
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <img
        src="./images/content-chair.jpg"
        alt="content-chair"
        className="h-96 lg:block hidden"
      />
      <div className="flex flex-col items-start gap-y-5 px-5 py-20 lg:h-96 lg:w-500 lg:p-20 bg-light-pink">
        <h1 className="text-5xl uppercase">Dicover Furnitures</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="./menucategory">
          <button className="bg-light-blue px-5 py-2 outline-none border border-medium-blue">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Content;
