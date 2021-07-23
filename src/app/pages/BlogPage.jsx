import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogPage = () => {
  const history = useHistory();
  const handleRemove = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {history.push('/')});
  };
  const { id } = useParams();
  const {
    data: blog,
    isLoaded,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div>
      {error && <div>{error}</div>}
      {blog && (
        <>
          <h1>{blog.title}</h1>
          <h4>Written by {blog.author}</h4>
          <p>{blog.body}</p>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </div>
  );
};

export default BlogPage;
