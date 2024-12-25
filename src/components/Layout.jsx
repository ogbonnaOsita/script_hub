import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen flex flex-col">
      <header className="py-4 border-b border-b-gray-500">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="text-2xl font-semibold">
            Scripts Hub
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-sm"
            >
              Log in
            </Link>
            <button className="md:hidden flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Main Content Area with flex-grow */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
