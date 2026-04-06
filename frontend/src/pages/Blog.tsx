import { useEffect, useState } from "react";
import '../css/Blog.css'
import BlogCard from '../components/BlogCard'
import api from '../api/axios'

function Blog() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/posts/published")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="blog-container">
        {posts
          .filter((p: any) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((p: any) => (
            <BlogCard key={p.id} post={p} />
          ))}
      </div>
    </div>
  );
}

export default Blog;