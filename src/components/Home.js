import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); //returns a function
  //now using this navigate function, we can navigate to the order-summary route on clik of a button, just provide --> as argument ----> the path for the route or a number that indicates a change in the history stack 
  return (
    <>
      <div>Home page</div>
      <button
        onClick={() =>
          navigate("order-summary", {
            replace: true,
          })
        }
      >
        Place order
      </button>
    </>
  );
};

export default Home;

//if u want to replace the history ------> instead of pushing a route onto the stack 
//for that u can pass in an optional 2nd argument as object in navigate() fun

//thus this way we replaced-----> instead of  pushing order-summary  route onto the history stack (basically ignored from history stack)
//so after this if back button pressed- then 1 extra step will be backed since in history stack there is no order-summary route, so it backs form the previous route of order-summary route which is home route in this case
