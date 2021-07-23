import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div
        className="md:flex hidden text-white flex flex-auto items-baseline justify-between md:px-64"
        style={{ backgroundColor: "#000000" }}
      >
        <p>Big Logo</p>
        <Link to="/new-blog">New Blog</Link>
      </div>
      <div
        className="md:hidden text-white flex flex-auto items-baseline justify-between md:px-64"
        style={{ backgroundColor: "#000000" }}
      >
        <p>Big Logo</p>
        <Link to="/new-blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
