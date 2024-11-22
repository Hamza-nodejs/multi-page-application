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
                console.log('API Response:', response);

                // Access the array from response.data
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else {
                    throw new Error('API did not return an array in data');
                }

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
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <h2>{user.make}</h2>
                        <p>Model: {user.model}</p>
                        <p>Variant: {user.variant}</p>
                        <p>------------------------------</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
