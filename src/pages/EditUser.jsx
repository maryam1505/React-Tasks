import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    
  });
  return <div>EditUser</div>;
};

export default EditUser;
