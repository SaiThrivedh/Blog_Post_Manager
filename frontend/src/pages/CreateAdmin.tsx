import { useState } from "react";
import api from "../api/axios";

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async () => {
    try {
      await api.post("/users", { name, email, password });
      alert("Admin created");
      setName(""); setEmail(""); setPassword("");
    } catch (err: any) {
      alert(err?.response?.data?.msg || "Error");
    }
  };

  return (
    <div>
      <h2>Create Admin</h2>

      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateAdmin;