import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            TV
          </span>
        </a>

        <div className={"flex md:hidden"}>
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block cursor-pointer closeButton text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  focus:outline-none   rounded-lg text-sm p-1.5"
            type="button"
            // onClick={toggleMobileMenu}
            // ref={buttonRef}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
        </div>

        <div
          className={`
               w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            // ref={mobileMenuRef}
            className="font-medium flex flex-row justify-center items-center p-4 md:p-0 m-4 "
          >
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {/* <li>
              {theme === "dark" ? (
                <Sun
                  className={"cursor-pointer text-white/50 hover:text-white/90"}
                  onClick={handleThemeChange}
                />
              ) : (
                <Moon
                  className={
                    "cursor-pointer text-black/50  hover:text-black/90"
                  }
                  onClick={handleThemeChange}
                />
              )}
            </li> */}
            <div className={"flex flex-row ml-4 md:ml-12"}>
              <li className="m-1">
                <Link
                  target="_blank"
                  to={"https://www.instagram.com/traviticus/"}
                >
                  <BsInstagram className={"h-5 w-full bg-white"}></BsInstagram>
                </Link>
              </li>
              {/* <li className="m-1">
                <Link
                  target="_blank"
                  to={"https://www.youtube.com/@travisvela/shorts"}
                >
                  <BsYoutube className={"h-5 w-full bg-white"}></BsYoutube>
                </Link>
              </li> */}
              <li className="m-1">
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/travisvela/"}
                >
                  <BsLinkedin className={"h-5 w-full bg-white"}></BsLinkedin>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
