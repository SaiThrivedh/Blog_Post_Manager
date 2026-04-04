import { useState } from "react";
import api from "../api/axios";
import '../css/createposts.css'


const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");

  const handleCreate = async () => {
    try {
      await api.post("/posts", {
        title,
        content,
        category,
        status,
      });
      alert("Post created");
    } catch (err: any) {
      alert(err?.response?.data?.msg || "Error");
    }
  };

 return (
  <div className="post-form-page">
    <h2>Create Post</h2>

    <div className="form-card">
      <div className="form-grid">

        <div className="form-group full">
          <label>Title</label>
          <input onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group full">
          <label>Content</label>
          <textarea onChange={e => setContent(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input onChange={e => setCategory(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select onChange={e => setStatus(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

      </div>

      <div className="form-footer">
        <button className="btn-primary" onClick={handleCreate}>
          Create Post
        </button>
      </div>
    </div>
  </div>
);
}

export default  CreatePosts