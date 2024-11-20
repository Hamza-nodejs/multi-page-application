import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-700">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-8" alt="Logo" />
                    <span className="text-2xl font-semibold dark:text-white">React Router</span>
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/about');
                                }}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/pricing"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/api"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 md:text-white hover:text-blue-600 dark:text-white"
                            >
                                API
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
