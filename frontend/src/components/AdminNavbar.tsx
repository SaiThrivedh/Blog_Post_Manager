import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/superadmin/profile" className="nav-item">
          Profile
        </Link>

        <span className="nav-item" onClick={handleLogout}>
          Logout
        </span>
      </div>

    </div>
  );
};

export default AdminNavbar;