import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Blog from "./pages/Blog";

import PublicLayout from "./layouts/PublicLayout";
//import AdminLayout from "./layouts/AdminLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import Dashboard from "./pages/Dashboard";

//import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
   
      
        <Routes>
           <Route path="/" element={<PublicLayout />}>
           <Route index element={<Blog/>}/>
           </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/superadmin" element={<SuperAdminLayout/>}>
             <Route path="dashboard" element={<Dashboard />} />
          </Route>
           
        </Routes>
     
   
  );
}

export default App;