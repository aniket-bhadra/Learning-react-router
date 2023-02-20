import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); //returns a function
  //now using this navigate function, we can navigate to the order-summary route on clik of a button, just provide --> as argument ----> the path for the route or a number that indicates a change in the history stack
  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </>
  );
};

export default Home;
