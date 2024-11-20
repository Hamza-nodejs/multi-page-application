import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function JsonDetail() {
    const { state } = useLocation(); 
    const { postId } = useParams(); 

    const post = state?.post; 

    if (!post) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p className="text-red-600">
                    Error: Post data is not available. Please navigate from the home page.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
                Post Details
            </h1>
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {post?.title || "No Title Available"}
                </h2>
                <p className="text-gray-600 mb-2">
                    <strong>Post ID:</strong> {post?.id || "N/A"}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>User ID:</strong> {post?.userId || "N/A"}
                </p>
                <p className="text-gray-600">
                    <strong>Body:</strong> {post?.body || "No Content Available"}
                </p>
            </div>
        </div>
    );
}
