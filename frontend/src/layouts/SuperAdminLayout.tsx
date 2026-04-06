import "../css/SuperAdminLayout.css";
import "../css/SuperAdminNavbar.css";
import Sidebar from "../components/SuperAdminSidebar";
import SuperAdminNavbar from "../components/SuperAdminNavbar";

import { Outlet } from "react-router-dom";

const SuperAdminLayout = () => {
  return (
    <div className="app-layout">
     
      <Sidebar />

      <div className="content-right">
        
        <SuperAdminNavbar />

        
        <main className="main-scrollable-area">
          <Outlet /> 
          
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;