import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContextProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between items-center bg-gray-100 border-b border-gray-300 p-4 rounded-l-[2rem] dark:text-white dark:bg-slate-950 dark:border-slate-900">
      <h1 className="ml-5">Dashboard</h1>
      <button className="text-2xl text-slate-900 dark:text-white" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Navbar;
