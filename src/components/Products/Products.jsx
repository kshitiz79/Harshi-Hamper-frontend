import React from "react";
import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ products, innerPage, headingText }) => {
    if (!products || !products.data || !Array.isArray(products.data)) {
        // Handle the case when products is undefined, does not have a 'data' property, or 'data' is not an array
        return null; 
    }

    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products.data.map((item) => (
                    <Product key={item.id} id={item.id} data={item.attributes} />
                ))}
            </div>
        </div>
    );
};

export default Products;
