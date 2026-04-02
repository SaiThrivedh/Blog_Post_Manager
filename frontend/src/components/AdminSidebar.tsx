import { Link } from "react-router-dom";
import "../css/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">

      <h3 className="sidebar-logo">Admin Panel</h3>

      <div className="sidebar-section">
        <Link className="sidebar-link" to="/admin/dashboard">
          Dashboard
        </Link>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">POSTS</h4>

        <Link className="sidebar-link" to="/admin/posts">
          All Posts
        </Link>

        <Link className="sidebar-link" to="/admin/posts/create">
          Create Post
        </Link>
      </div>

      </div>
  );
};

export default AdminSidebar;