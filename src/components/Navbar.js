import { IoCartOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function onToggleShow() {
    setShowNav((nav) => !nav);
  }

  function addToCart() {
    alert("Unavailable\nOn work progress. Thanks!");
  }
  return (
    <header className="flex items-center justify-between lg:px-20 px-5 h-16">
      <h2 className="text-2xl">Furniliving</h2>
      <nav className="flex items-center gap-5">
        <ul className="lg:flex hidden gap-5 items-center">
          <a href="#/">
            <NavbarList className="px-3 py-2">Home</NavbarList>
          </a>
          <a href="#product">
            <NavbarList className="px-3 py-2">Products</NavbarList>
          </a>
          {/* <a href="#about">
            <NavbarList className="px-3 py-2">About</NavbarList>
          </a> */}
          <a href="#contact">
            <NavbarList className="px-3 py-2">Contact</NavbarList>
          </a>

          <div className="lg:flex lg:items-center hidden gap-4">
            <IoCartOutline className="text-xl" onClick={addToCart} />
            <FaUserCircle className="text-2xl" onClick={addToCart} />
          </div>
        </ul>
      </nav>

      <div className="lg:hidden block">
        {showNav ? (
          <RxCross1 className="text-2xl" onClick={onToggleShow} />
        ) : (
          <RxHamburgerMenu className="text-2xl" onClick={onToggleShow} />
        )}
        {showNav && (
          <ul className="lg:flex md:flex flex flex-col items-center absolute left-0 right-0 top-16 pt-11 py-10 gap-10 text-black bg-white z-10">
            <a href="#/">
              <NavbarList className="px-3 py-2">Home</NavbarList>
            </a>
            <a href="#product">
              <NavbarList className="px-3 py-2">Products</NavbarList>
            </a>
            {/* <a href="#about">
              <NavbarList className="px-3 py-2">About</NavbarList>
            </a> */}
            <a href="#contact">
              <NavbarList className="px-3 py-2">Contact</NavbarList>
            </a>
            <div className="flex items-center gap-4">
              <IoCartOutline className="text-xl" onClick={addToCart} />
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}

function NavbarList({ children, className }) {
  return <li className={className}>{children}</li>;
}

export default Navbar;
