import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import "../css/viewposts.css";

const ViewPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "tech","health","lifestyle","finance","education",
    "sports","travel","food","business","entertainment"
  ];

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

  const filteredPosts = posts.filter(post => {
    if (selectedCategory && post.category !== selectedCategory) return false;

    if (search) {
      const text = (post.title + post.content).toLowerCase();
      return text.includes(search.toLowerCase());
    }

    return true;
  });

  return (
    <div className="posts-page">
      <h2>Posts</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search posts..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="posts-container">
        {filteredPosts.map(post => (
          <div className="post-card" key={post.id}>

            <div className="post-row">
              <div className="post-info">
                <div className="post-title">{post.title}</div>
                <div className="post-meta">
                  {post.User?.name} • 
                  <span className="category-badge">{post.category}</span> • 
                  {post.content.slice(0, 60)}...
                </div>
              </div>

              <div>
                <span className={`status ${post.status}`}>
                  {post.status}
                </span>
              </div>
            </div>

            <div className="post-actions">
              <Link to={`${post.id}`} className="btn-link">
                View
              </Link>
              <button onClick={() => updateStatus(post.id, post.status)}>
                Toggle
              </button>
              <button
                className="btn-danger"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPosts;