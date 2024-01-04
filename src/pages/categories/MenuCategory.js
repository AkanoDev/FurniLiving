import NavCategory from "./NavCategory";
import { features } from "../../datas/features";

function MenuCategory() {
  return (
    <div className="h-auto flex flex-col items-center gap-16">
      <NavCategory />
      <div className="w-4/5 px-12">
        <ul className="flex flex-wrap justify-center gap-16">
          {features.map((category) => (
            <MenuCategoryList category={category} key={category.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuCategoryList({ category }) {
  return (
    <li className="flex flex-col items-center">
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

export default MenuCategory;
