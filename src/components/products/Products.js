import React from "react";
import { Link } from "react-router-dom";

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
    </>
  );
};

export default Products;
