import { Link, useNavigate } from "react-router-dom";
import "../css/SuperAdminNavbar.css";
import { User, LogOut } from "lucide-react";

const SuperAdminNavbar = () => {
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
          <User size={14} />
            Profile
        </Link>

        <span className="nav-item logout" onClick={handleLogout}>
          <LogOut size={14} />
            Logout
        </span>
      </div>

    </div>
  );
};

export default SuperAdminNavbar;