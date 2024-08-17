import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 bg-[#eee]">
      <nav>
        <ul className="flex gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create_user">Create User</Link>
          </li>
          <li>
            <Link to="/manage_roles">Manage Roles</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
