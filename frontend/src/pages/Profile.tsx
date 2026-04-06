import { useState, useEffect } from 'react';
import api from '../api/axios';
import '../css/profile.css'


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
      setError(err?.response?.data?.msg || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

return (
  <div className="profile-page">
    <h2>Profile</h2>

    <div className="profile-card">
      {user && (
        <>
          <div className="profile-row">
            <span className="profile-label">Username</span>
            <span className="profile-value">{user.name}</span>
          </div>

          <div className="profile-row">
            <span className="profile-label">Email</span>
            <span className="profile-value">{user.email}</span>
          </div>

          {user.Role && (
            <div className="profile-row">
              <span className="profile-label">Role</span>
              <span className="profile-value">{user.Role}</span>
            </div>
          )}
        </>
      )}
    </div>
  </div>
);
};

export default Profile;