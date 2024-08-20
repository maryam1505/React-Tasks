import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages included
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import ManageUsers from "./pages/ManageUsers";
import ManageRoles from "./pages/ManageRoles";
import CreateRole from "./pages/CreateRole";
import EditUser from "./pages/EditUser";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ThemeContextProvider from "./context/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <div className="flex dark:bg-slate-800 dark:h-full">
          <Sidebar />
          <div className="grow ml-20 md:ml-72 h-full min-h-screen lg:min-h-screen text-slate-900 dark:text-white">
            <Navbar />
            <div className="flex-grow p-4 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/manage_users" element={<ManageUsers />} />
                <Route path="/create_user" element={<CreateUser />} />
                <Route path="/edit_user/:id" element={<EditUser />} />
                <Route path="/manage_roles" element={<ManageRoles />} />
                <Route path="/create_role" element={<CreateRole />} />
                <Route path="/edit_role/:id" element={<CreateRole />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
