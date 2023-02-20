import "./App.css";
//for route configuration need 2 components from react router
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import FeaturedProducts from "./components/products/product-list/FeaturedProducts";
import NewProducts from "./components/products/product-list/NewProducts";
import Products from "./components/products/Products";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
        {/*  this route will match only when no other routes match, position of this route not matters, the <NoMatch /> component only renders when no other routes match to the url coz the path="*"     */}
      </Routes>
    </div>
  );
}

export default App;
