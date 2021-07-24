import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Blogs() {
  const {
    data: blogs,
    isLoaded,
    error,
  } = useFetch("http://localhost:8000/blogs");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrap flex items-center justify-center mt-16">
        {blogs.map((blog) => (
          <Link to={`blogs/${blog.id}`} key={blog.id}>
            {/* large */}
            <div
              style={{ width: "30rem" }}
              className="md:flex border-ease bg-purple-50 hover:bg-white border-2 border-transparent hover:border-purple-900 hidden flex-row justify-between items-center mb-3 p-2 rounded-lg "
            >
              <div className="flex flex-col items-start ">
                <div className="text-xl font-inter font-bold">{blog.title}</div>
                <div className="flex items-baseline justify-center text-sm font-regular text-gray-500">
                  <p>author:&nbsp;</p><a href="/" className="">{blog.author}</a>
                </div>
              </div>
              <div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-purple-200 hover:text-purple-900 hover:h-7 hover:w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* small */}
            <div
              style={{ width: "20rem" }}
              className="md:hidden bg-purple-50 border-2 border-transparent hover:border-purple-900 hover:bg-white border-ease flex px-4 flex-row justify-between items-center mb-3 p-4 rounded-lg "
            >
              <div className="flex flex-col items-start ">
                <div className="text-xl font-inter font-bold">{blog.title}</div>
                <div className="text-sm font-regular text-gray-500">
                  author:{blog.author}
                </div>
              </div>
              <div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-purple-200 hover:text-purple-900 hover:h-7 hover:w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Blogs;

// https://60f7f0639cdca000174550e4.mockapi.io/blog-o/v1/users
