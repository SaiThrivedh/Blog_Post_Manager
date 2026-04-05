import { useState, useEffect } from "react";
import api from "../api/axios";
import "../css/dashboard.css";


type Post = {
  id: number;
  title: string;
  status: string;
};

type User = {
  id: number;
  username: string;
};

const SuperAdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    admins: 0,
  });

 
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await api.get("/posts");
        const usersRes = await api.get("/users");

      
        const allPosts: Post[] = postsRes.data;
        const users: User[] = usersRes.data;

        setStats({
          total: allPosts.length,
          published: allPosts.filter((p: Post) => p.status === "published").length,
          drafts: allPosts.filter((p: Post) => p.status === "draft").length,
          admins: users.length,
        });

        setRecentPosts(allPosts.slice(0, 5));
      } catch (err) {
        console.error("Dashboard error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

  
      <div className="stats-grid">
        <div className="stat-card">Total Posts: {stats.total}</div>
        <div className="stat-card">Published: {stats.published}</div>
        <div className="stat-card">Drafts: {stats.drafts}</div>
        <div className="stat-card">Admins: {stats.admins}</div>
      </div>

      
      <div className="recent-section">
        <h3>Recent Posts</h3>

        {recentPosts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          recentPosts.map((post) => (
            <div key={post.id} className="recent-item">
              <span>{post.title}</span>
              <span className={`status ${post.status}`}>
                {post.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;