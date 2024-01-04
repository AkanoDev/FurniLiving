import { IoCartOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function onToggleShow() {
    setShowNav((nav) => !nav);
  }

  function addToCart() {
    alert("Unavailable\nOn work progress. Thanks!!!");
  }
  return (
    <header className="h-16 w-screen flex justify-between items-center lg:px-24 px-10 cursor-pointer">
      <h2 className="text-2xl">Furniliving</h2>
      <nav>
        <ul className="lg:flex hidden gap-5">
          <a href="#/">
            <NavbarList className="px-3 py-2">Home</NavbarList>
          </a>
          <a href="#product">
            <NavbarList className="px-3 py-2">Products</NavbarList>
          </a>
          <a href="#about">
            <NavbarList className="px-3 py-2">About</NavbarList>
          </a>
          <a href="#contact">
            <NavbarList className="px-3 py-2">Contact</NavbarList>
          </a>
        </ul>
      </nav>
      <div className="lg:flex items-center hidden gap-4">
        <IoCartOutline className="text-xl" onClick={addToCart} />
        <FaUserCircle className="text-2xl" />
      </div>

      <div className="flex justify-start lg:hidden ">
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
            <a href="#about">
              <NavbarList className="px-3 py-2">About</NavbarList>
            </a>
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
