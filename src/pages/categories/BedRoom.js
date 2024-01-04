import NavCategory from "./NavCategory";

export const bedcategory = [
  {
    id: 1,
    image: "./images/bedroom/belaine.jpg",
    name: "belaine bed",
    price: 599,
  },
  {
    id: 2,
    image: "./images/bedroom/braxton.jpg",
    name: "braxton bed",
    price: 599,
  },
  {
    id: 3,
    image: "./images/bedroom/ryland-standing-dresser.jpg",
    name: "ryland standing dresser",
    price: 599,
  },
  {
    id: 4,
    image: "./images/bedroom/seth-sofa-bed.jpg",
    name: "seth sofa bed",
    price: 599,
  },
  {
    id: 5,
    image: "./images/bedroom/nina-bed-side.jpg",
    name: "nina bed side",
    price: 599,
  },
  {
    id: 6,
    image: "./images/bedroom/winzel-closed.jpg",
    name: "winzel closed",
    price: 599,
  },
];
function BedRoom() {
  return (
    <div className="h-auto flex flex-col items-center gap-16">
      <NavCategory />
      <div className="w-4/5 px-12">
        <ul className="flex flex-wrap justify-center gap-16 pb-10">
          {bedcategory.map((category) => (
            <BedRoomList category={category} key={category.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function BedRoomList({ category }) {
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

export default BedRoom;
