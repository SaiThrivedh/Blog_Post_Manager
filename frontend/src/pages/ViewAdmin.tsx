import { useEffect, useState } from "react";
import api from "../api/axios";


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
    <div>
      <h2>Admins</h2>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} ({user.email})</p>
          <p>Status: {user.isActive ? "Active" : "Inactive"}</p>

          <button onClick={() => toggleActive(user.id, user.isActive)}>
            Toggle Active
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


export default ViewAdmins