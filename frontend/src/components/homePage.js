import React, { useState } from 'react';
import LoginForm from './forms/login';
import RegistrationForm from './forms/register';

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Main Welcome Section */}
      <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-6">Your one-stop solution for everything you need.</p>
        
        {/* Buttons to open forms */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => setIsRegisterOpen(true)}
            className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600"
          >
            Register
          </button>
        </div>
      </div>

      {/* Login Form Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-700 text-3xl font-bold"
            >
              &times; {/* Larger close icon */}
            </button>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <LoginForm onClose={() => setIsLoginOpen(false)} />
          </div>
        </div>
      )}

      {/* Register Form Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-700 text-3xl font-bold"
            >
              &times; {/* Larger close icon */}
            </button>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <RegistrationForm onClose={() => setIsRegisterOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
