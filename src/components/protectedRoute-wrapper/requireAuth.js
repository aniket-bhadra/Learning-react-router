import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";

const RequireAuth = ({ children }) => {
  const location = useLocation(); //returns an object with some properties. pathname property contain---the path that we are trying to accessig OR the path we entered in url OR the path mentioned in URL bar, here its is-- "profile". to set the state property in this object, add state prop into <Navigate />. so, useLocation & <Navigage /> is connected.
  const auth = useAuth();
  console.log("this is inside requireAuth", location);

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;

    //so when ever we reach to this RequiereAuth, we fetch the path that we r accessing through useLocation() hook. & attach that path in login compenent' state,
  }

  return children;
};

export default RequireAuth;

//here we used <Navigate /> instead of useNavigate()
