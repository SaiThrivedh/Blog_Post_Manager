import { useEffect, useState } from "react";
import '../css/Blog.css'
import BlogCard from '../components/BlogCard'
import api from '../api/axios'

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   api.get("/posts/published")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="blog-container">
      {posts.map((p: any) => (
        <BlogCard key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Blog;