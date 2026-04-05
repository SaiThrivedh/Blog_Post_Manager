import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import "../css/AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2 className="navbar-title">Blog CMS</h2>

      <div className="nav-links">
        <Link to="/admin/profile" className="nav-item">
          <User size={14} />
          Profile
        </Link>

        <span className="nav-item" onClick={handleLogout}>
          <LogOut size={14} />
          Logout
        </span>
      </div>
    </div>
  );
};

export default AdminNavbar;