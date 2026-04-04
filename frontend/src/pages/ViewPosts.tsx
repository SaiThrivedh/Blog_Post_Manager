import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import '../css/viewposts.css'


const ViewPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate(); // 👈 add this

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id: number) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  const updateStatus = async (id: number, status: string) => {
    await api.put(`/posts/${id}`, {
      status: status === "draft" ? "published" : "draft",
    });
    fetchPosts();
  };


  return (
  <div className="posts-page">
    <h2>Posts</h2>

    <div className="posts-container">
      {posts.map(post => (
        <div className="post-card" key={post.id}>

          <div className="post-row">

            <div className="post-info">
              <div className="post-title">{post.title}</div>

              <div className="post-meta">
                {post.User?.name} • {post.content.slice(0, 60)}...
              </div>
            </div>

            <div>
              <span className={`status ${post.status}`}>
                {post.status}
              </span>
            </div>

          </div>

          <div className="post-actions">
            <button onClick={() => navigate(`/blog/${post.id}`)}>View</button>
            <button onClick={() => updateStatus(post.id, post.status)}>Toggle</button>
            <button className="btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
          </div>

        </div>
      ))}
    </div>
  </div>
);
};

export default ViewPosts