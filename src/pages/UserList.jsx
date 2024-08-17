import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/users/get");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!Array.isArray(users)) {
    return <p>No Users Available.</p>;
  }

  return (
    <div className="w-full">
      <div className="mx-36 my-9 bg-blue-950 bg-opacity-5 rounded-lg py-3 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold py-3">User List</h1>
          <Link to={"/create_user"}>
            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-900 flex items-center gap-2"
            >
              <FaPlus /> New User
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
                  Profile
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Father/Husband Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                  Age in yrs
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="odd:bg-white align-middle odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td key={user.id} className="px-6 py-4">
                    {user.id}
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={`http://localhost:5001/uploads/${user.image}`}
                      alt={user.lname}
                      className="size-12 rounded-full"
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.fname}
                  </td>
                  <td className="px-6 py-4">{user.lname}</td>
                  <td className="px-6 py-4">{user.guardian}</td>
                  <td className="px-6 py-4">{user.dob}</td>
                  <td className="px-6 py-4">{user.age}</td>
                  <td className="px-6 py-4">{user.designation}</td>
                  <td className="px-6 py-4">{user.department}</td>
                  <td className="px-6 py-4">{user.country}</td>
                  <td className="px-6 py-4">{user.city}</td>
                  <td className="px-6 py-4">{user.address}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <div className="flex gap-2">
                        <Link to={`/edit_user/${user.id}`}><FaEdit /></Link> 
                        <FaTrash className="text-red-600" />
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
