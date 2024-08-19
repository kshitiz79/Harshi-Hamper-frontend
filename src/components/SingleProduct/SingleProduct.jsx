import React, { useState , useContext} from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Context } from "../../utils/context";
import "./SingleProduct.scss";

const SingleProduct = () => {
  
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data?.data?.[0]?.attributes) {
    return <div>Error: {error?.message || "Data not available"}</div>;
  }

  const product = data.data[0].attributes;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_KS_URL + product.img.data[0].attributes.url} alt={product.title} />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="description">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={() => handleQuantityChange(-1)}>-</span>
                <span>{quantity}</span>
                <span onClick={() => handleQuantityChange(1)}>+</span>
              </div>
              <button className="add-to-cart-button"  onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setQuantity(1);
                                }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{' '}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
     
      <RelatedProducts  
      productId={id} 
      categoryId ={ product.categories.data[0].id } />
                                         
    </div>
    </div>
  );
};

export default SingleProduct;
