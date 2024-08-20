import React, { useState } from "react";
import { FaTachometerAlt, FaUsers, FaUserShield, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden p-4">
        <FaBars
          onClick={toggleSidebar}
          className="cursor-pointer text-slate-900 dark:text-white"
        />
      </div>
      <div
        className={`bg-gray-100 text-slate-900 h-screen fixed px-4 ${
          isOpen ? "w-64" : "w-16"
        } md:w-64 rounded-r-md shadow-lg dark:text-white dark:bg-slate-950 transition-all duration-300 ease-in-out`}
      >
        <h1
          className={`text-2xl font-bold hidden md:block my-7 text-slate-900 dark:text-white ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link to={"/"}>Admin Dashboard</Link>
        </h1>
        <ul className="flex flex-col mt-5 text-xl">
          <Link to={"/"}>
            <li className="flex items-center px-2 py-3 space-x-4 hover:cursor-pointer text-slate-900 hover:bg-gradient-to-l hover:from-slate-800 hover:text-white hover:rounded-r-[2rem] hover:border-r-2 dark:text-white hover:border-slate-800">
              <FaTachometerAlt className="block" />
              <span
                className={`hidden md:block ${isOpen ? "block" : "hidden"}`}
              >
                Dashboard
              </span>
            </li>
          </Link>
          <Link to={"/manage_users"}>
            <li className="flex items-center px-2 py-3 space-x-4 hover:cursor-pointer text-slate-900 hover:bg-gradient-to-l hover:from-slate-800 hover:text-white hover:rounded-r-[2rem] hover:border-r-2 dark:text-white hover:border-slate-800">
              <FaUsers />
              <span
                className={`hidden md:block ${isOpen ? "block" : "hidden"}`}
              >
                Manage Users
              </span>
            </li>
          </Link>
          <Link to={"/manage_roles"}>
            <li className="flex items-center px-2 py-3 space-x-4 hover:cursor-pointer text-slate-900 hover:bg-gradient-to-l hover:from-slate-800 hover:text-white hover:rounded-r-[2rem] hover:border-r-2 dark:text-white hover:border-slate-800">
              <FaUserShield />
              <span
                className={`hidden md:block ${isOpen ? "block" : "hidden"}`}
              >
                Manage Roles
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
