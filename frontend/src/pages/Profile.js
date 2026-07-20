import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setUser(res.data.user);
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <h2 className="profile-loading">Loading Profile...</h2>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">
          <p>
            <strong>Name</strong>
            <span>{user.name}</span>
          </p>

          <p>
            <strong>Email</strong>
            <span>{user.email}</span>
          </p>

          <p>
            <strong>Account Status</strong>
            <span className="active">Active</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;