import { useEffect, useState } from "react";
import api from "../api/axios";
import '../css/viewadmins.css'


const ViewAdmins = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleActive = async (id: number, isActive: boolean) => {
    await api.put(`/users/${id}`, { isActive: !isActive });
    fetchUsers();
  };

  const deleteUser = async (id: number) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
  <div className="admins-page">
    <h2>Admins</h2>

    <div className="admins-container">
      {users.map(user => (
        <div key={user.id} className="admin-card">

          <div className="admin-row">

            <div className="admin-info">
              <div className="admin-name">{user.name}</div>
              <div className="admin-meta">{user.email}</div>
            </div>

            <div>
              <span className={`status ${user.isActive ? "active" : "inactive"}`}>
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </div>

          </div>

          <div className="admin-actions">
            <button onClick={() => toggleActive(user.id, user.isActive)}>
              Toggle
            </button>

            <button className="btn-danger" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  </div>
);
}


export default ViewAdmins