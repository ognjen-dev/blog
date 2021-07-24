import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-4">
      {/* big */}
      <div
        className="md:flex hidden text-white flex flex-auto items-center justify-between px-96"
        style={{}}
      >
        <Link
          to="/"
          className="flex flex-row opacity-90 hover:opacity-100 items-center"
        >
          <p className="text-3xl">⌨️</p>
          <p className="font-bold">.io</p>
        </Link>
        <Link
          to="/new-blog"
          className="hover:underline opacity-90 hover:opacity-100"
        >
          New Blog
        </Link>
      </div>
      {/* small */}
      <div
        className="md:hidden mx-5 text-white flex flex-auto items-center justify-between"
        style={{}}
      >
        <p className="text-4xl font-bold">⌨️.io</p>
        <Link to="/new-blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
