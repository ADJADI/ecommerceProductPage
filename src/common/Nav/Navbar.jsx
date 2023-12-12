import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-close.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const toggleMenuMobile = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(true);
  };

  return (
    <div className="h-16 flex items-center gap-5 pl-5 shadow-md ">
      <button onClick={toggleMenuMobile} className="mt-1 md:hidden">
        <img src={hamburger} alt="" />
      </button>
      <h1 className="font-bold text-3xl">
        <a href="">sneakers</a>
      </h1>
      <div
        className={`md:h-auto md:w-auto md:static ${
          isActive
            ? ""
            : "bg-white z-50 h-screen w-2/3 fixed top-0 left-0 pl-5 "
        }`}
      >
        <ul
          className={`flex flex-col gap-4 font-semibold ${
            isActive ? "hidden md:flex md:flex-row" : "md:flex md:flex-row"
          }`}
        >
          <li>
            {!isActive && (
              <button
                onClick={toggleMenuMobile}
                className="mt-5 mb-8 md:hidden"
              >
                <img src={close} alt="" />
              </button>
            )}
          </li>
          <li>
            <Link onClick={closeMenu} to="/Collection">
              Collections
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/Men">
              Men
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/Women">
              Women
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/About">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
