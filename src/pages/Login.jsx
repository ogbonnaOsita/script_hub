import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-medium">Scripts Hub</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-8">
        <div className="bg-white shadow-md rounded-sm p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Login
          </h2>
          <p className="text-gray-700 mb-6">
            Access a wide range of scripts for automation and efficiency by
            signing into your account.
          </p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-black focus:border-black"
            />
          </div>
          <button className="w-full bg-black text-white py-2 rounded-sm hover:bg-gray-800 transition-colors">
            Login
          </button>

          {/* <p className="text-gray-500 mt-4 text-sm text-center">
            Don't have an SSO account?{" "}
            <span className="font-medium">Contact your administrator.</span>
          </p> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
