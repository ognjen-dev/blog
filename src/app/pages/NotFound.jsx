import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404!</h1>
      <Link exact to="/">
      <div>Home</div>
      </Link>
    </div>
  );
};

export default NotFound;
