import NavCategory from "./NavCategory";

export const officecategory = [
  {
    id: 1,
    image: "./images/officeroom/chandler-adjustable-desk.jpg",
    name: "chandler adjustable desk",
    price: 599,
  },
  {
    id: 2,
    image: "./images/officeroom/cole-multifunction-study-desk.jpg",
    name: "cole multifunction study desk",
    price: 599,
  },
  {
    id: 3,
    image: "./images/officeroom/fedora-office-chair.jpg",
    name: "fedora office chair",
    price: 599,
  },
  {
    id: 4,
    image: "./images/officeroom/felix-executive-chair.jpg",
    name: "felix executive chair",
    price: 599,
  },
  {
    id: 5,
    image: "./images/officeroom/Frankie-ergonomic-chair.jpg",
    name: "Frankie ergonomic chair",
    price: 599,
  },
  {
    id: 6,
    image: "./images/officeroom/tilly-featured.png",
    name: "tilly featured",
    price: 599,
  },
];
function OfficeRoom() {
  return (
    <div className="h-auto flex flex-col items-center gap-16">
      <NavCategory />
      <div className="w-4/5 px-12">
        <ul className="flex flex-wrap justify-center gap-16 pb-10">
          {officecategory.map((category) => (
            <OfficeRoomList category={category} key={category.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function OfficeRoomList({ category }) {
  return (
    <li
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <img
        src={category.image}
        alt={category.name}
        className="object-cover h-40 w-40"
      />
      <h3 className="mt-4 capitalize font-semibold font-sans">
        {category.name}
      </h3>
    </li>
  );
}

export default OfficeRoom;
