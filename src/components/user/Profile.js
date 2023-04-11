import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  
  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Profile;

//this component is belongs to protected route. & accessible only if the user is logged in
