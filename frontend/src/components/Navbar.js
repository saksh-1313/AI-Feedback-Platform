import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>AI Feedback Platform</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;