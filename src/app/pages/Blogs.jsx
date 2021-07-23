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
      <div className="wrap">
        {blogs.map((blog) => (
          <Link to={`blogs/${blog.id}`} key={blog.id}>
            <div className="flex flex-row justify-between items-center basis-300">
              <div className="flex flex-col items-start">
                <div className="text-xl font-inter font-bold">{blog.title}</div>
                <div className="text-md font-regular text-gray-500 ml-1">
                  author:{blog.author}
                </div>
              </div>
              <div>
                <button>
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
