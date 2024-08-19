import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories, data }) => {
    if (!categories || !categories.data) {
        return null;
    }

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.data.map((item) => (
                    <Link key={item.id} to={`/category/${item.id}`} className="category">
                        <img src={process.env.REACT_APP_KS_URL + item.attributes.img.data.attributes.url} alt="" />
                    </Link>
                ))}
                
            </div>
          
        </div>
    );
};

export default Category;
