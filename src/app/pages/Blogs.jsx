import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Blogs() {
  const { data: blogs, isLoaded, error } = useFetch("http://localhost:8000/blogs");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrap">
        {blogs.map((blog) => (
          <Link to={`blogs/${blog.id}`} key={blog.id}>
            {blog.title} author:{blog.author}
          </Link>
        ))}
      </div>
    );
  }
}

export default Blogs;

// https://60f7f0639cdca000174550e4.mockapi.io/blog-o/v1/users
