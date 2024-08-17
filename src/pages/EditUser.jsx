import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [initialValues, setInitialValues] = useState({
    profilePic: null,
    firstName: "",
    lastName: "",
    guardian: "",
    age: "",
    dob: "",
    designation: "",
    department: "",
    country: "",
    city: "",
    address: "",
  });

  //  getting user by id
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/users/get/${id}`
        );
        const data = response.data;

        const formatDate = (date) => {
          const d = new Date(date);
          return d.toISOString().split("T")[0];
        };

        setInitialValues({
          profilePic: data.image || null,
          firstName: data.fname,
          lastName: data.lname,
          guardian: data.guardian,
          age: data.age,
          dob: formatDate(data.dob),
          designation: data.designation,
          department: data.department,
          country: data.country,
          city: data.city,
          address: data.address,
        });

        if (data.image) {
          setProfilePic(`http://localhost:5001/uploads/${data.image}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to fetch user data.");
      }
    };
    fetchUserData();
  }, [id]);

  //   formik Validation
  const formik = useFormik({
    initialValues,
    enableReinitialize: true, // Reinitialize form with new values
    validationSchema: Yup.object({
      profilePic: Yup.mixed().test(
        "fileType",
        "Unsupported file format",
        (value) =>
          !value ||
          (value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type))
      ),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      guardian: Yup.string().required("Guardian name is required"),
      age: Yup.number()
        .min(1, "Age must be greater than zero")
        .required("Age is required"),
      dob: Yup.date().required("Date of birth is required"),
      designation: Yup.string().required("Designation is required"),
      department: Yup.string().required("Department is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      if (values.profilePic instanceof File) {
        formData.append("image", values.profilePic);
      } else {
        formData.append("image", profilePic);
      }
      formData.append("fname", values.firstName);
      formData.append("lname", values.lastName);
      formData.append("guardian", values.guardian);
      formData.append("age", values.age);
      formData.append("dob", values.dob);
      formData.append("designation", values.designation);
      formData.append("department", values.department);
      formData.append("country", values.country);
      formData.append("city", values.city);
      formData.append("address", values.address);

      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      try {
        const response = await axios.put(
          `http://localhost:5001/users/update/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("User updated successfully:", response.data);
        alert("User updated successfully!");
        resetForm();
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Failed to update user.");
      } finally {
        setSubmitting(false);
        navigate("/");
      }
    },
  });

  //   Handling Image onChange
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue("profilePic", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full">
      <div className="min-w-36 mx-auto max-w-[40rem] my-9 bg-blue-950 bg-opacity-5 rounded-lg py-3 px-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold py-6">Edit User</h1>
        </div>

        <form
          className="mx-auto mb-4"
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
        >
          {/* Profile Pic */}
          <div className="flex w-full justify-center items-center mb-5">
            <div className="mt-2 flex items-center gap-x-3 flex-col justify-center">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover mb-2"
                />
              ) : (
                <svg
                  className="w-36 h-36 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <input
                type="file"
                accept="image/*"
                id="profilePic"
                className="hidden"
                onChange={handleImageChange}
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => document.getElementById("profilePic").click()}
              >
                Change
              </button>

              {formik.touched.profilePic && formik.errors.profilePic ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.profilePic}
                </div>
              ) : null}
            </div>
          </div>

          {/* Name */}
          <div className="mb-5 grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Ayesha"
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Maryam"
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-blue-900 bg-opacity-5 rounded-lg p-2 mb-5">
            <p className="text-gray-400 text-sm mb-3">Personal Info</p>
            <div className="mb-5">
              <label
                htmlFor="guardian"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Guardian Name{" "}
                <span className="text-gray-400 font-light">
                  (Husband/Father)
                </span>
              </label>
              <input
                id="guardian"
                type="text"
                placeholder="Guardian Name"
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.touched.guardian && formik.errors.guardian
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("guardian")}
              />
              {formik.touched.guardian && formik.errors.guardian ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.guardian}
                </div>
              ) : null}
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  placeholder="21"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.age && formik.errors.age
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("age")}
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of birth
                </label>
                <input
                  id="dob"
                  type="date"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.dob && formik.errors.dob
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("dob")}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.dob}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Designation
                </label>
                <input
                  id="designation"
                  type="text"
                  placeholder="Software Engineer"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.designation && formik.errors.designation
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("designation")}
                />
                {formik.touched.designation && formik.errors.designation ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.designation}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Department
                </label>
                <input
                  id="department"
                  type="text"
                  placeholder="IT"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.department && formik.errors.department
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("department")}
                />
                {formik.touched.department && formik.errors.department ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.department}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-blue-900 bg-opacity-5 rounded-lg p-2 mb-5">
            <p className="text-gray-400 text-sm mb-3">Location</p>
            <div className="mb-2 grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Pakistan"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.country && formik.errors.country
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("country")}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Multan"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    formik.touched.city && formik.errors.city
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("city")}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <textarea
                id="address"
                placeholder="Address"
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
          </div>

          {/* Update User Button */}
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
