import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <div className="p-5 bg-[#eee]">
      <nav>
        <ul className="flex gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="focus:outline-none flex items-end justify-center gap-2"
            >
              Users <FaChevronDown className="text-gray-400 text-sm" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg p-2 min-w-36">
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/create_user">Create User</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/manage_roles">Manage Roles</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
