import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styling/product.scss";
import { Settings } from "../../App";
import React, { useContext, useState } from "react";
import LazyLoad from "react-lazyload";
import QuickView from "./QuickView";

function Product({
  productName,
  discount,
  mainPrice,
  rating,
  productImg,
  id,
  handleAddProductsToCart,
  handleAddProductsToWishlist,
  handleAddNewProductToCompare,
  UpdateQuickView,
}) {
  let settings = useContext(Settings);
  let [quickView, setQuickView] = useState(false);
  let price = Number(discount) + Number(mainPrice);
  function handleQuickView() {
    setQuickView(!quickView);
    UpdateQuickView();
  }

  if (quickView) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }

  return (
    <>
      {quickView && <QuickView handleQuickView={handleQuickView} />}
      <div className="product">
        <div className="img position-relative">
          <LazyLoad height={200} offset={100}>
            <img src={productImg} alt="product img" width="100%" />
          </LazyLoad>

          <div className="adds position-absolute">
            <div className="add-to-cart">
              <button title="add to cart" onClick={handleAddProductsToCart}>
                <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
              </button>
            </div>
            <div className="add-to-wishlist">
              <button
                title="add to wishlist"
                onClick={handleAddProductsToWishlist}
              >
                <FontAwesomeIcon icon="fa-solid fa-heart" />
              </button>
            </div>
            <div className="add-to-compare">
              <button
                title="add to compare"
                onClick={handleAddNewProductToCompare}
              >
                <FontAwesomeIcon icon="fa-solid fa-code-compare" />
              </button>
            </div>
            <div className="quick-view">
              <button title="quick view" onClick={handleQuickView}>
                <FontAwesomeIcon icon="fa-solid fa-eye" />
              </button>
            </div>
          </div>
        </div>
        <div className="text">
          <h6>
            <Link to={`/product/${id}`}>{productName}</Link>
          </h6>
          <div className="rating">Rating: {rating}</div>
          <div className="price">
            <span>
              {settings.currency === "USD" ? "$" : "€"}
              {mainPrice}
            </span>
            <del>
              {settings.currency === "USD" ? "$" : "€"}
              {price.toFixed(2)}
            </del>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Product);
