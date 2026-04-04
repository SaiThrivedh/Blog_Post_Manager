import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import "../css/blogDetails.css";

type Post = {
  id: number;
  title: string;
  content: string;
  status?: string;
  author?: {
    username: string;
  };
};

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <p className="loading">Loading...</p>;

  return (
    <div className="blog-container">
      <div className="blog-card">
        <h1 className="blog-title">{post.title}</h1>

        <div className="blog-meta">
          
          <span className={`status ${post.status}`}>
            {post.status}
          </span>
        </div>

        <p className="blog-content">{post.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;