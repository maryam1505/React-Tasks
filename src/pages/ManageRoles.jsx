import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

const ManageRoles = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://localhost:5001/roles");
        setRoles(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const deleteRole = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/delete_role/${id}`);
      setRoles(roles.filter(role => role.id !== id));
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      deleteRole(id);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!Array.isArray(roles)) {
    return <p>No Roles Available.</p>;
  }

  return (
    <div className="w-full">
      <div className="mx-20 my-9 bg-slate-900 bg-opacity-5 dark:bg-opacity-100 rounded-lg py-3 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold py-3">Manage Roles</h1>
          <Link to={"/create_role"}>
            <button
              type="button"
              className="text-white bg-slate-950 hover:bg-slate-900 focus:ring-4 focus:ring-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-950 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-900 flex items-center gap-2"
            >
              <FaPlus /> New Role
            </button>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {roles.length > 0 ? roles.map((role) => (
                <tr key={role.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">{role.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {role.title}
                  </th>
                  <td className="px-6 py-4">
                    {role.description}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 font-medium  hover:underline">
                      <FaTrash className="text-red-600 dark:text-red-500 cursor-pointer" onClick={() => confirmDelete(role.id)} />
                    </div>
                  </td>
                </tr>
              )) : (
                <tr className="odd:bg-white align-middle odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td colSpan="4" className="px-6 py-4 text-center">
                    No roles created yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRoles;
