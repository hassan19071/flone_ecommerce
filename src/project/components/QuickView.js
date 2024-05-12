import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styling/quick-view.scss";
import React, { useContext, useState } from "react";
import {
  HandleAddNewProductToCart,
  HandleAddNewProductToCompare,
  HandleAddNewProductToWishlist,
  QuickViewProduct,
  Settings,
} from "../../App";

function QuickView({ handleQuickView }) {
  let quickViewProduct = useContext(QuickViewProduct);
  let [product, setProduct] = useState(quickViewProduct);
  let [imgIndex, setImgIndex] = useState(0);
  let settings = useContext(Settings);
  let handleAddNewProductToCart = useContext(HandleAddNewProductToCart);
  let handleAddProductsToWishlist = useContext(HandleAddNewProductToWishlist);
  let handleAddNewProductToCompare = useContext(HandleAddNewProductToCompare);
  console.log(product);
  function handleImg(ind) {
    setImgIndex(ind);
  }
  function handleCount(process) {
    if (process === "plus") {
      setProduct({ ...product, count: product.count + 1 });
    }
    if (process === "minus") {
      if (product.count > 1) {
        setProduct({ ...product, count: product.count - 1 });
      }
    }
  }
  return (
    <div
      className="quick-views"
      onClick={(e) => {
        if (e.target.id !== "product-details") {
          handleQuickView();
        }
      }}
    >
      <div className="container px-lg-5 py-3">
        <div
          className="product-detailss py-4"
          id="product-details"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="row">
            <div className="col-md-5">
              <div className="imgs">
                <div className="main-img">
                  <img
                    src={product.images[imgIndex]}
                    alt="img"
                    className="w-100"
                  />
                </div>
                <div className="other d-flex justify-content-between mt-4">
                  {product.images.length > 1 ? (
                    <>
                      <img
                        src={product.images[0]}
                        alt="img"
                        onClick={() => handleImg(0)}
                      />
                      <img
                        src={product.images[1]}
                        alt="img"
                        onClick={() => handleImg(1)}
                      />
                      <img
                        src={product.images[2]}
                        alt="img"
                        onClick={() => handleImg(2)}
                      />
                    </>
                  ) : (
                    <img
                      src={product.images[0]}
                      alt="img"
                      onClick={() => handleImg(0)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-7 mt-lg-0 mt-4">
              <div className="details">
                <div className="name">
                  <h5>{product.title}</h5>
                </div>
                <div className="price">
                  <del>
                    {settings.currency === "USD" ? "$" : "€"}
                    {(
                      Number(product.discountPercentage) + Number(product.price)
                    ).toFixed(2)}
                  </del>{" "}
                  <span>
                    {settings.currency === "USD" ? "$" : "€"}
                    {product.price}
                  </span>
                </div>
                <div className="des">
                  <p className="my-3">{product.description}</p>
                </div>
                <div className="selects">
                  <div className="more-about py-3">
                    <h5>
                      Rating : <span>{product.rating}</span>
                    </h5>
                    <h5>
                      Brand : <span>{product.brand}</span>
                    </h5>
                    <h5>
                      Category : <span>{product.category}</span>
                    </h5>
                  </div>
                  <div className="qty my-4 d-flex justify-content-start align-items-center">
                    <div className="minus" onClick={() => handleCount("minus")}>
                      <FontAwesomeIcon icon="fa-solid fa-minus" />
                    </div>
                    <div className="num">{product.count}</div>
                    <div
                      className="plus me-2"
                      onClick={() => handleCount("plus")}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddNewProductToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="adds d-flex">
                    <div
                      className="add-wishlist me-4"
                      onClick={() => handleAddProductsToWishlist(product)}
                    >
                      <FontAwesomeIcon icon="fa-regular fa-heart" /> Add to
                      Wishlist
                    </div>
                    <div
                      className="add-compare"
                      onClick={() => handleAddNewProductToCompare(product)}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-code-compare" /> Add to
                      Compare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(QuickView);
