import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const ManageRoles = () => {
  return (
    <div className="w-full">
      <div className="mx-20 my-9 bg-blue-950 bg-opacity-5 rounded-lg py-3 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold py-3">Manage User Roles</h1>
          <Link to={"/create_role"}>
            <button
              type="button"
              class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-900 flex items-center gap-2"
            >
              <FaPlus /> New Role
            </button>
          </Link>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">1</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2">
                      <FaEdit />
                      <FaTrash className="text-red-600" />
                    </div>
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">2</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2">
                      <FaEdit />
                      <FaTrash className="text-red-600" />
                    </div>
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">3</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2">
                      <FaEdit />
                      <FaTrash className="text-red-600" />
                    </div>
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">4</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2">
                      <FaEdit />
                      <FaTrash className="text-red-600" />
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4">5</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex gap-2">
                      <FaEdit />
                      <FaTrash className="text-red-600" />
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRoles;
