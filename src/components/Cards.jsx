import React, { useEffect, useState } from 'react';
import apiHelper from '../utils/apiHelper';

export default function Users() {
    console.log("api", import.meta.env.VITE_USER_API);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await apiHelper({
                    endpoint: import.meta.env.VITE_USER_API,
                    method: 'GET',
                });
                setUsers(response);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to load users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* <h1>Users</h1> */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>------------------------------</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
