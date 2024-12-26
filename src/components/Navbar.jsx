import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "./ModalContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, getIsLoggedIn } = useModal();
  const isLoggedIn = getIsLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="py-4 border-b border-b-gray-500">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-semibold">
          Scripts Hub
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-sm"
          >
            {isLoggedIn ? "Logout" : "Log in"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
