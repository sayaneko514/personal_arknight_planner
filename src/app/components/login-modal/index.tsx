import React, { useState } from 'react';

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);
        onClose(); // Close the modal after login
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative p-8 bg-white dark:bg-primary w-full max-w-md mx-auto flex-col flex rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-4 text-primaryGold dark:text-primaryBlue bg-transparent rounded-md"
                    aria-label="Close"
                >
                    &times;
                </button>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-primaryGold dark:text-primaryBlue">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-1 border border-secondaryGold dark:border-lightkBlue rounded-md shadow-sm focus:ring-primaryGold focus:border-primaryGold darK:focus:ring-darkBlue dark:focus:border-ring-darkBlue"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-primaryGold dark:text-primaryBlue">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-1 border border-secondaryGold dark:border-lightBlue rounded-md shadow-sm focus:ring-primaryGold focus:border-primaryGold darK:focus:ring-darkBlue dark:focus:border-ring-darkBlue"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-primaryGold dark:bg-primaryBlue rounded-md hover:bg-secondaryGold dark:hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
