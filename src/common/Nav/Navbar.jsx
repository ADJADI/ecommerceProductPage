import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-close.svg";
import ShoppingCart from "../Shop/ShoppingCart";
import AccountPage from "../../authentication/AccountPage";

export default function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const toggleMenuMobile = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(true);
  };

  return (
    <div className="h-16 flex gap-0 justify-around items-center xs:justify-between xs:gap-5 px-8 shadow-md md:shadow-none md:border-b md:h-24 xl:px-0 z-50  relative">
      <div className="flex items-center gap-4 ">
        <button onClick={toggleMenuMobile} className="mt-1 md:hidden">
          <img src={hamburger} alt="" />
        </button>
        <h1 className="font-bold text-xl xs:text-3xl">
          <Link onClick={closeMenu} to="/">
            sneakers
          </Link>
        </h1>
        <div
          className={`md:h-auto md:w-auto md:static ${
            isActive
              ? ""
              : "bg-white z-50 h-screen w-2/3 fixed top-0 left-0 pl-5 "
          }`}
        >
          <ul
            className={`flex flex-col gap-4  font-semibold ${
              isActive
                ? "hidden md:flex md:flex-row md:font-normal"
                : "md:flex md:flex-row"
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
              <Link
                onClick={closeMenu}
                to="/Collection"
                className="hover:underline-offset-[38px] hover:underline decoration-4 decoration-Orange"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="/Men"
                className="hover:underline-offset-[38px] hover:underline decoration-4 decoration-Orange"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="/Women"
                className="hover:underline-offset-[38px] hover:underline decoration-4 decoration-Orange"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="/About"
                className="hover:underline-offset-[38px] hover:underline decoration-4 decoration-Orange"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="/Contact"
                className="hover:underline-offset-[38px] hover:underline decoration-4 decoration-Orange"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <ShoppingCart />
        <AccountPage />
      </div>
    </div>
  );
}
