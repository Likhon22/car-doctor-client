import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export const Navbar = () => {
  const { users, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logout",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch();
  };
  const links = (
    <>
      <li>
        <NavLink id="nav" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink id="nav" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink id="nav" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink id="nav" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink id="nav" to="/contact">
          Contact
        </NavLink>
      </li>
      {users ? (
        <>
          <li>
            <NavLink id="nav" to="/bookings">
              My Booking
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink id="nav" to="/login">
            <button>Login</button>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav>
      <div className="navbar py-4 px-24 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 lg:flex lg:gap-4 text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-6 items-center">
          <AiOutlineShopping className="text-3xl"></AiOutlineShopping>
          <BsSearch className="text-2xl"></BsSearch>
          <button className="btn  btn-outline hover:bg-[#FF3811] border-orange-500 text-[#FF3811] hover:border-none   hover:text-white">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};
