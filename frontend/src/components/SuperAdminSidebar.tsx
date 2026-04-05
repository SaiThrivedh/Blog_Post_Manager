import { Link } from "react-router-dom";
import "../css/SuperAdminSidebar.css";


import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  Users,
} from "lucide-react";
import "../css/SuperAdminSidebar.css";

const SuperAdminSidebar = () => {
  return (
    <div className="sidebar">

      <h3 className="sidebar-logo">⚡Super Admin</h3>

      <div className="sidebar-section">
        <Link className="sidebar-link" to="/superadmin/dashboard">
          <LayoutDashboard size={16} />
          Dashboard
        </Link>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">POSTS</h4>

        <Link className="sidebar-link" to="/superadmin/posts">
          <FileText size={16} />
          All Posts
        </Link>

        <Link className="sidebar-link" to="/superadmin/posts/create">
          <PlusSquare size={16} />
          Create Post
        </Link>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">ADMINS</h4>

        <Link className="sidebar-link" to="/superadmin/users">
          <Users size={16} />
          All Admins
        </Link>

        <Link className="sidebar-link" to="/superadmin/users/create">
          <PlusSquare size={16} />
          Create Admin
        </Link>
      </div>

    </div>
  );
};

export default SuperAdminSidebar;