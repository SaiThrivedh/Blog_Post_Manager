import { useState } from "react";
import api from "../api/axios";
import '../css/createadmin.css'


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
  <div className="form-page">
    <h2>Create Admin</h2>

    <div className="form-card">

      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <div className="form-footer">
        <button className="btn-primary" onClick={handleCreate}>
          Create Admin
        </button>
      </div>

    </div>
  </div>
);
}

export default CreateAdmin;