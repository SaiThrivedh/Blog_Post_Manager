import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Blog from "./pages/Blog";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperAdminPostView from "./pages/SuperAdminPostView";
import AdminPostView from "./pages/AdminPostView";
import ViewAdmin from "./pages/ViewAdmin";
import ViewPosts from "./pages/ViewPosts";
import CreateAdmin from "./pages/CreateAdmin";
import CreatePosts from "./pages/CreatePosts";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
   
      
        <Routes>
         
           <Route path="/" element={<PublicLayout />}>
           <Route index element={<Blog/>}/>
           <Route path="blog/:id" element={<BlogDetails />} /> 
           </Route>


          <Route path="/login" element={<Login />} />
      

          
          <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
            <Route path="/superadmin" element={<SuperAdminLayout />}>
               <Route path="dashboard" element={<SuperAdminDashboard />} />
               <Route path="posts/:id" element={<SuperAdminPostView />} /> 
               <Route path="posts" element={<ViewPosts />} />
               <Route path="users" element={<ViewAdmin />} />
               <Route path="posts/create" element={<CreatePosts />} />
               <Route path="users/create" element={<CreateAdmin />} />
               <Route path="profile" element={<Profile />} />
           </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}>
               <Route path="/admin" element={<AdminLayout />}>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="posts/:id" element={<AdminPostView />} /> 
                  <Route path="posts" element={<ViewPosts />} />
                  <Route path="posts/create" element={<CreatePosts />} />
                  <Route path="profile" element={<Profile />} />
               </Route>
          </Route>



           
        </Routes>
     
   
  );
}

export default App;