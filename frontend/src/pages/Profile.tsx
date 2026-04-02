import { useState, useEffect } from 'react';
import api from '../api/axios';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/profile');
        setUser(res.data);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Failed to load');
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
          {user.bio && <p><b>Bio:</b> {user.bio}</p>}
        </>
      )}
    </div>
  );
};

export default Profile;