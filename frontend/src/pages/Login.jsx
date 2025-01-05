import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Replace with actual API call
    const mockResponse = { accessToken: "sampleToken123" };
    localStorage.setItem("accessToken", mockResponse.accessToken);
    history.push("/"); // Redirect to home page after login
  };

  return (
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-center font-bold text-white mb-4">
            Login
          </h4>
        </div>
      </div>
      <div className="bg-gray-100 h-auto flex items-center justify-center mt-8 mb-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h3 className="text-xl font-bold mb-4">Login Details</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
