import { useEffect, useState } from "react";
import api from "../api/axios";

 const ViewPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

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
    <div>
      <h2>Posts</h2>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.User?.name}</p>
          <p>{post.content}</p>
          <p>Status: {post.status}</p>

          <button onClick={() => updateStatus(post.id, post.status)}>
            Toggle Status
          </button>

          <button onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewPosts