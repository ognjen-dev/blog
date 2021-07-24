import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
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
      history.push("/");
    });
  };

  return (
    <div className="min-h-screen bg text-white">
      <Navbar />
      <div className="flex justify-center">
        <form className="flex flex-col items-start" onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            className="text-black focus:outline-none rounded-sm py-1 px-2 w-64"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label>Blog Author:</label>
          <input
            className="text-black focus:outline-none rounded-sm py-1 px-2 w-64"
            value={author}
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <label>Body:</label>
          <textarea
            className="text-black focus:outline-none no-resize appearance-none block bg-gray-200
                          border border-gray-200 
                          py-3 px-4 mb-3 leading-tight
                          focus:bg-white focus:border-gray-500
                           resize-none rounded-sm py-1 px-2 w-64"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required
          />
          {!isPending && (
            <input
              type="submit"
              className="rounded-md bg-purple-800 hover:bg-purple-900 cursor-pointer py-1 px-2"
              value="Create"
            />
          )}
          {isPending && (
            <input
              disabled
              type="submit"
              className="rounded-md bg-green-300 py-1 px-2"
              value="Adding Blog..."
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
