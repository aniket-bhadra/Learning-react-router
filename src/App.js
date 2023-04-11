import React from "react";
import "./App.css";
//for route configuration need 2 components from react router
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import FeaturedProducts from "./components/products/product-list/FeaturedProducts";
import NewProducts from "./components/products/product-list/NewProducts";
import Products from "./components/products/Products";
import Admin from "./components/Admin";
import UserDetails from "./components/UserDetails";
import Users from "./components/user/User";
import Profile from "./components/user/Profile";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />

          {/* this index route contain the index prop not path, this index route will now share the path of the parent route which is products */}

          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        {/*  this route will match only when no other routes match, position of this route not matters, the <NoMatch /> component only renders when no other routes match to the url coz the path="*"     */}
        <Route path="users" element={<Users />}>
          <Route path=":userID" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
