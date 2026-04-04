import { useState, useEffect } from 'react';
import api from '../api/axios';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    setError("Not logged in");
    setLoading(false);
    return;
  }

  const fetchProfile = async () => {
    try {
      const res = await api.get('/users/profile');
      setUser(res.data);
    } catch (err: any) {
      setError(err?.response?.data?.msg || 'Failed to load'); // 👈 FIXED msg
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          {user.bio && <p><b>Role:</b> {user.Role}</p>}
        </>
      )}
    </div>
  );
};

export default Profile;