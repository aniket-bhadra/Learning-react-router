import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="search products...." />
      </div>
      <nav className="products-nav">
        {/* here for nested routes-- used relateive link (without / infront) */}
        <Link to="featured">Featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet /> 
      {/* where to render the child dictates-- <Outlet /> component */}
    </>
  );
};

export default Products;
