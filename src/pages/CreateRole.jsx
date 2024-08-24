import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRole = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    title: Yup.string().required("Role Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = async (values) => {
    console.log("Submitting values:", values);
    try {
      const response = await axios.post(
        "http://localhost:5001/create_role",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Role created successfully!");
    } catch (error) {
      if (error.response) {
        console.error("Response Error:", error.response.data);
      } else if (error.request) {
        console.error("Request Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } finally {
      navigate("/manage_roles");
    }
  };

  return (
    <div className="w-full">
      <div className="min-w-36 mx-auto max-w-[40rem] my-9 bg-slate-900 bg-opacity-5 dark:bg-opacity-100 rounded-lg py-3 px-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold py-6">Create New Role</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mx-auto mb-4">
              <div className="mb-5">
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Admin"
                    className={`bg-gray-50 border text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 ${
                      errors.title && touched.title ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui odit suscipit."
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 ${
                    (errors.description &&
                    touched.description) &&
                    "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-950 dark:hover:bg-slate-900 dark:focus:ring-slate-800"
              >
                Create Role
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateRole;
