import React from 'react'

const CreateRole = () => {
  return (
    <div className="w-full">
      <div className="min-w-36 mx-auto max-w-[40rem] my-9 bg-blue-950 bg-opacity-5 rounded-lg py-3 px-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold py-6">Create New Role</h1>
        </div>

        <form className="mx-auto mb-4">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role Title
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Admin"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="decription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
            >
              Description
            </label>
            <input
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui odit suscipit."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRole