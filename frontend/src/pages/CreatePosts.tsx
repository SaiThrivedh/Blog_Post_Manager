import { useState } from "react";
import api from "../api/axios";

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
    <div>
      <h2>Create Post</h2>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <input placeholder="Category" onChange={e => setCategory(e.target.value)} />

      <select onChange={e => setStatus(e.target.value)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default  CreatePosts