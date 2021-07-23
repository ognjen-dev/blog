import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Blogs from "./Blogs";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/')
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <label>Body:</label>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        />

        {!isPending && <input type="submit" value="Add Blog" />}
        {isPending && <input disabled type="submit" value="Adding Blog..." />}
      </form>
      <h1>{author}</h1>
    </div>
  );
};

export default NewBlog;
