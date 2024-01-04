function Content() {
  return (
    <div
      className="flex justify-center items-center py-28"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <img
        src="./images/content-chair.jpg"
        alt="content-chair"
        className="h-96 lg:block hidden"
      />
      <div className="w-500 h-96 flex flex-col items-start justify-center gap-6 px-20 bg-light-pink">
        <h1 className="text-5xl uppercase">Dicover Furnitures</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-light-blue px-5 py-2 outline-none border border-medium-blue">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Content;
