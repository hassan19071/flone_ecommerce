import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styling/products-details.scss";
import React, { useContext, useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  HandleAddNewProductToCart,
  HandleAddNewProductToCompare,
  HandleAddNewProductToWishlist,
  Settings,
} from "../../App";
function ProductsDetails() {
  let settings = useContext(Settings);
  let paramId = useParams();
  let [loading, setLoading] = useState(false);
  let url = `https://dummyjson.com/products/${paramId.productId}`;
  let [product, setProduct] = useState({});
  let [imgIndex, setImgIndex] = useState(0);
  let handleAddNewProductToCart = useContext(HandleAddNewProductToCart);
  let handleAddProductsToWishlist = useContext(HandleAddNewProductToWishlist);
  let handleAddNewProductToCompare = useContext(HandleAddNewProductToCompare);

  const options = {
    method: "GET",
  };
  useEffect(() => {
    setLoading(false);
    async function fetchData() {
      let request = await fetch(url, options)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => alert(error))
        .finally(() => setLoading(true));
      setProduct({ ...request, count: 1 });
    }
    fetchData();
    // eslint-disable-next-line
  }, [url]);

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
    <>
      <div className="product-details py-5">
        <div className="container px-lg-5 py-5">
          <div className="row">
            <div className="col-lg-5">
              <div className="imgs">
                <div className="main-img">
                  {loading ? (
                    <img
                      src={product.images[imgIndex]}
                      alt="img"
                      className="w-100"
                    />
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "400px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
                <div className="other d-flex justify-content-between mt-4">
                  {loading ? (
                    <>
                      {product.images.map((img, ind) => {
                        return (
                          <img
                            src={img}
                            alt="img"
                            key={ind}
                            onClick={() => handleImg(ind)}
                          />
                        );
                      })}
                    </>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "80px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                      <div>
                        <Skeleton
                          style={{
                            height: "80px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                      <div>
                        <Skeleton
                          style={{
                            height: "80px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4 ps-lg-5">
              <div className="details">
                <div className="name">
                  {loading ? (
                    <h5>{product.title}</h5>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "20px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
                <div className="price">
                  {loading ? (
                    <>
                      <del>
                        {settings.currency === "USD" ? "$" : "€"}
                        {(
                          Number(product.discountPercentage) +
                          Number(product.price)
                        ).toFixed(2)}
                      </del>{" "}
                      <span>
                        {settings.currency === "USD" ? "$" : "€"}
                        {product.price}
                      </span>
                    </>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "20px",
                            background: "#eee",
                            width: "90%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
                <div className="rating mt-4">
                  {loading ? (
                    <>Rating : {product.rating} / 5</>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "15px",
                            background: "#eee",
                            width: "40%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
                <div className="des">
                  {loading ? (
                    <p className="my-3">{product.description}</p>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "15px",
                            background: "#eee",
                            width: "40%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
                <div className="selects">
                  {loading ? (
                    <>
                      <div className="qty my-4 d-flex justify-content-start align-items-center">
                        <div
                          className="minus"
                          onClick={() => handleCount("minus")}
                        >
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
                      <div className="more-about py-3">
                        <h5>
                          Brand : <span>{product.brand}</span>
                        </h5>
                        <h5>
                          Category : <span>{product.category}</span>
                        </h5>
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
                          <FontAwesomeIcon icon="fa-solid fa-code-compare" />{" "}
                          Add to Compare
                        </div>
                      </div>
                    </>
                  ) : (
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "15px",
                            background: "#eee",
                            width: "60%",
                          }}
                        ></Skeleton>
                      </div>
                      <div>
                        <Skeleton
                          style={{
                            height: "15px",
                            background: "#eee",
                            width: "60%",
                          }}
                        ></Skeleton>
                      </div>
                      <div>
                        <Skeleton
                          style={{
                            height: "10px",
                            background: "#eee",
                            width: "40%",
                          }}
                        ></Skeleton>
                        <Skeleton
                          style={{
                            height: "10px",
                            background: "#eee",
                            width: "40%",
                          }}
                        ></Skeleton>
                      </div>
                    </SkeletonTheme>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts
        productCategory={product.category}
        loading={loading}
        productId={product.id}
      />
    </>
  );
}

export default React.memo(ProductsDetails);
