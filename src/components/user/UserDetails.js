import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams(); //return an object of dynamic key value pair from the current url

  const userID = params.userID;
  return <div>Details about the user {userID}</div>;
};

export default UserDetails;

//this same component has to be rendered for three different urls
