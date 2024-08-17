import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";
import ManageRoles from "./pages/ManageRoles";
import CreateRole from "./pages/CreateRole";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/create_user" element={<CreateUser/>} />
        <Route path="/manage_roles" element={<ManageRoles/>} />
        <Route path="/create_role" element={<CreateRole/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
