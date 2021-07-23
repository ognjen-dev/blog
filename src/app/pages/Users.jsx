import React, { useState, useEffect } from "react";

function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://60f7f0639cdca000174550e4.mockapi.io/blog-o/v1/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} 
          </li>
        ))}
      </ul>
    );
  }
}

export default Users;

// https://60f7f0639cdca000174550e4.mockapi.io/blog-o/v1/users
