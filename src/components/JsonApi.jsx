import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JsonApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const endPoint = import.meta.env.VITE_JSON_API_ENDPOINT;
        console.log(endPoint, "API Endpoint");

        fetch(endPoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched Data:", data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p className="text-gray-600">Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p className="text-red-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
                Fake JSON Placeholder
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() =>
                            navigate(`/json/${item.id}`, { state: { post: item } }) // Pass post data as state
                        }
                    >
                        <p className="text-gray-600">
                            <strong>Post ID:</strong> {item.id}
                        </p>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Title: {item.title}
                        </h2>
                        <p className="text-gray-600">
                            <strong>User ID:</strong> {item.userId}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
