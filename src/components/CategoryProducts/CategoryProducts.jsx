import React, { useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";

const CategoryProducts = () => {
    const { id } = useParams();
    const { products, setProducts } = useContext(Context);

    const getProductsByCategory = useCallback(() => {
        fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`).then((res) => {
            console.log(res);
            setProducts(res);
        });
    }, [id, setProducts]);

    useEffect(() => {
        getProductsByCategory();
    }, [getProductsByCategory]);

    return (
        <div>
            <Products headingText="Products in this Category" products={products} />
        </div>
    );
};

export default CategoryProducts;
