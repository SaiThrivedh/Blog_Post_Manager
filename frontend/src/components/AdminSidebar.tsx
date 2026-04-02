import { Link } from "react-router-dom";
import "../css/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">

      <h3 className="sidebar-logo">Super Admin Panel</h3>

      <div className="sidebar-section">
        <Link className="sidebar-link" to="/superadmin/dashboard">
          Dashboard
        </Link>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">POSTS</h4>

        <Link className="sidebar-link" to="/superadmin/posts">
          All Posts
        </Link>

        <Link className="sidebar-link" to="/superadmin/posts/create">
          Create Post
        </Link>
      </div>

      </div>
  );
};

export default AdminSidebar;