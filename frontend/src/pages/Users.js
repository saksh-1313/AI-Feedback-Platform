import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/users",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setUsers(res.data.users);
      } catch (err) {
        console.log("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <h1>Registered Users</h1>
      <p className="users-subtitle">
        Manage and view all registered users
      </p>

      <div className="users-container">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user._id}>
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div className="user-details">
                <h2>{user.name}</h2>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Registered:</strong>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Users;