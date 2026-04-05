import { Link } from "react-router-dom";
import "../css/AdminSidebar.css";


import {
  LayoutDashboard,
  FileText,
  PlusSquare
} from "lucide-react";
import "../css/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-logo">Admin Panel</h3>

      <div className="sidebar-section">
        <Link className="sidebar-link" to="/admin/dashboard">
          <LayoutDashboard size={16} />
          Dashboard
        </Link>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">POSTS</h4>

        <Link className="sidebar-link" to="/admin/posts">
          <FileText size={16} />
          All Posts
        </Link>

        <Link className="sidebar-link" to="/admin/posts/create">
          <PlusSquare size={16} />
          Create Post
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;