import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import "../css/BlogDetails.css";

type Post = {
  id: number;
  title: string;
  content: string;
  status?: string;
  createdAt?: string;
  User?: {
    name: string;
  };
};


export default function AdminPostView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!post) return <p className="loading">Post not found</p>;

  return (
    <div className="blog-container">
      <div className="blog-card">
        <button onClick={() => navigate(-1)} className="btn-back">
         <span className="arrow">←</span>
         Back
        </button>
        <h1 className="blog-title">{post.title}</h1>

        <div className="blog-meta">
          <span className={`status ${post.status || "published"}`}>
            {post.status || "published"}
          </span>

          {post.createdAt && (
            <span>
              {new Date(post.createdAt).toDateString()}
            </span>
          )}
        </div>

        {post.User && (
          <p className="blog-author">
            By {post.User.name}
          </p>
        )}

        <p className="blog-content">{post.content}</p>

      </div>
    </div>
  );
}
