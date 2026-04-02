

import { Link } from "react-router-dom";
import "../css/SuperAdminSidebar.css"

const SuperAdminSidebar = () => {
  return (
    <div className="sidebar">

      <h3>Super Admin Panel</h3>

      
      <Link to="/superadmin/dashboard">Dashboard</Link>

     
      <h4>Posts</h4>
      <Link to="/superadmin/posts">All Posts</Link>
      <Link to="/superadmin/posts/create">Create Post</Link>

      
      <h4>Admins</h4>
      <Link to="/superadmin/users">All Admins</Link>
      <Link to="/superadmin/users/create">Create Admin</Link>

    </div>
  );
};

export default SuperAdminSidebar;