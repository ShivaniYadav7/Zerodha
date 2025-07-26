import React from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // user icon

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="topbar-container d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <div className="indices-container d-flex">
        <div className="me-4">
          <p className="mb-0 fw-bold">NIFTY 50</p>
          <p className="mb-0 text-success">100.2</p>
        </div>
        <div>
          <p className="mb-0 fw-bold">SENSEX</p>
          <p className="mb-0 text-danger">100.2</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <FaUserCircle size={24} />

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
