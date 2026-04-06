import "../css/AdminLayout.css";
import "../css/AdminNavbar.css";
import AdminSidebar from "../components/AdminSidebar"
import AdminNavbar from "../components/AdminNavbar";

import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="app-layout">
     
      <AdminSidebar />

      <div className="content-right">
        
        <AdminNavbar />

        
        <main className="main-scrollable-area">
          <Outlet /> 
          
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;