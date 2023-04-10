import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Link to="1">user1</Link>
      <Link to="2">user2</Link>
      <Link to="3">user3</Link>
      
      <Outlet />
    </div>
  );
};

export default User;
