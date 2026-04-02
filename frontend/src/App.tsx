import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Blog from "./pages/Blog";

import PublicLayout from "./layouts/PublicLayout";
//import AdminLayout from "./layouts/AdminLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import Dashboard from "./pages/Dashboard";
import ViewAdmin from "./pages/ViewAdmin";
import ViewPosts from "./pages/ViewPosts";
import CreateAdmin from "./pages/CreateAdmin";
import CreatePosts from "./pages/CreatePosts";
import Profile from "./pages/Profile";

function App() {
  return (
   
      
        <Routes>
           <Route path="/" element={<PublicLayout />}>
           <Route index element={<Blog/>}/>
           </Route>


          <Route path="/login" element={<Login />} />

          
          <Route path="/superadmin" element={<SuperAdminLayout/>}>
             <Route path="dashboard" element={<Dashboard />} />
             <Route path="posts" element={<ViewPosts />} />
             <Route path="users" element={<ViewAdmin />} />
             <Route path="posts/create" element={<CreatePosts />} />
             <Route path="users/create" element={<CreateAdmin />} />
             <Route path="profile" element={<Profile />} />
          </Route>



           
        </Routes>
     
   
  );
}

export default App;