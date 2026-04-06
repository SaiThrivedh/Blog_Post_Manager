import { useEffect, useState } from "react";
import '../css/Blog.css'
import BlogCard from '../components/BlogCard'
import api from '../api/axios'

function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/posts/published")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const filteredPosts = posts.filter((p: any) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blog-page">

      <input
        type="text"
        placeholder="Search blogs..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="blog-container">
        {filteredPosts.map((p: any) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>

    </div>
  );
}

export default Blog;