import { useEffect, useState } from "react";
import axios from "axios";
import '../css/Blog.css'
import BlogCard from '../components/BlogCard'

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   axios.get("http://localhost:5000/api/posts/published")
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