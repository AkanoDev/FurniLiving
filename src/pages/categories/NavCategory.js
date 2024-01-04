import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavCategory() {
  const [showNav, setShowNav] = useState(false);

  function onToggleShow() {
    setShowNav((nav) => !nav);
  }

  return (
    <div>
      <div className="flex justify-end items-center w-screen lg:px-24 px-10 h-16">
        <Link to="/">
          <RxCross1 className="text-xl" />
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-16">
        <ul className="lg:flex hidden gap-5 cursor-pointer">
          <Link to="/menucategory">
            <NavCategoryList className="px-3 py-2">All</NavCategoryList>
          </Link>
          <Link to="/livingroom">
            <NavCategoryList className="px-3 py-2">Living Room</NavCategoryList>
          </Link>
          <Link to="/bedroom">
            <NavCategoryList className="px-3 py-2">Bed Room</NavCategoryList>
          </Link>
          <Link to="/office">
            <NavCategoryList className="px-3 py-2">
              Office / Study Desk
            </NavCategoryList>
          </Link>
          <Link to="/Kitchen">
            <NavCategoryList className="px-3 py-2">Kitchen</NavCategoryList>
          </Link>
          <Link to="/shelves">
            <NavCategoryList className="px-3 py-2">
              Shelves & Storage
            </NavCategoryList>
          </Link>
          <Link to="/benches">
            <NavCategoryList className="px-3 py-2">
              Benches & Ottoman
            </NavCategoryList>
          </Link>
        </ul>
      </nav>

      <div className="flex justify-start w-screen px-10 lg:hidden ">
        {showNav ? (
          <RxCross1 className="text-2xl" onClick={onToggleShow} />
        ) : (
          <RxHamburgerMenu className="text-2xl" onClick={onToggleShow} />
        )}
        {showNav && (
          <ul className="lg:flex md:flex flex flex-col items-center absolute left-0 right-0 top-24 pt-11 py-10 gap-10 text-black bg-white z-10">
            <Link to="/menucategory">
              <NavCategoryList className="px-3 py-2">All</NavCategoryList>
            </Link>
            <Link to="/livingroom">
              <NavCategoryList className="px-3 py-2">
                Living Room
              </NavCategoryList>
            </Link>
            <Link to="/bedroom">
              <NavCategoryList className="px-3 py-2">Bed Room</NavCategoryList>
            </Link>
            <Link to="/office">
              <NavCategoryList className="px-3 py-2">
                Office / Study Desk
              </NavCategoryList>
            </Link>
            <Link to="/Kitchen">
              <NavCategoryList className="px-3 py-2">Kitchen</NavCategoryList>
            </Link>
            <Link to="/shelves">
              <NavCategoryList className="px-3 py-2">
                Shelves & Storage
              </NavCategoryList>
            </Link>
            <Link to="/benches">
              <NavCategoryList className="px-3 py-2">
                Benches & Ottoman
              </NavCategoryList>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

function NavCategoryList({ children, className }) {
  return <li className={className}>{children}</li>;
}

export default NavCategory;
