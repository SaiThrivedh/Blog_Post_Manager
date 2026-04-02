
import { useNavigate } from "react-router-dom";
import "../css/SuperAdminNavbar.css"
const SuperAdminNavbar = () => {
 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
<div className="navbar">
  <h2>Blog CMS</h2>

  <div className="nav-links">
    <span onClick={() => navigate("/superadmin/profile")}>
      Profile
    </span>

    <span onClick={handleLogout}>
      Logout
    </span>
  </div>
</div>
  );
};

export default SuperAdminNavbar;