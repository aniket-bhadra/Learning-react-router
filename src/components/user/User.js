import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //returns 2 values , 1st one is obj to get any value present in the url after '?', 2nd value is a function to set the search params, now using this this setSearchParams function we can add/remove the parameter

  // console.log(searchParams)
  //to get hold of "filter" parameter in url use get() method
  const showActiveUsers = searchParams.get("filter") === "active";
  //then compare the value with the 'acive'
  return (
    <div>
      <Link to="1">user1</Link>
      <Link to="2">user2</Link>
      <Link to="3">user3</Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};

export default Users;
