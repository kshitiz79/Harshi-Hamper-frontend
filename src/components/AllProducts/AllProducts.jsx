// AllProducts.jsx
import React from "react";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import "./AllProducts.scss"; // Import the SCSS file

const AllProducts = () => {
  const { data } = useFetch("/api/products?populate=*");

  return (
    <div className="all-products-main-content">
      <div className="layout">
        <h2 className="all-products-heading">All Products</h2>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default AllProducts;
