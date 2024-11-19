import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-8" alt="Logo" />
                    <span className="text-2xl font-semibold dark:text-white">React Router</span>
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-600">Home</Link>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/about')}
                            className="text-white hover:text-blue-600"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-blue-600">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="text-white hover:text-blue-600">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-blue-600">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
