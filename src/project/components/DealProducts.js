import React, { useContext, useEffect, useState } from "react";
import ProductBlog from "./ProductBlog";
import "./styling/deal-products.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AddQuickViewProduct,
  HandleAddNewProductToCart,
  HandleAddNewProductToCompare,
  HandleAddNewProductToWishlist,
} from "../../App";

function DealProducts() {
  let [activeSatus, setActiveStatus] = useState(0);
  let [pagination, setPagination] = useState(0);
  const url = `https://dummyjson.com/products?limit=8&skip=${pagination}`;
  const options = {
    method: "GET",
  };
  let handleAddProductsToCart = useContext(HandleAddNewProductToCart);
  let handleAddProductsToWishlist = useContext(HandleAddNewProductToWishlist);
  let handleAddNewProductToCompare = useContext(HandleAddNewProductToCompare);
  let quickView = useContext(AddQuickViewProduct);
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [skeleton] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);

  useEffect(() => {
    setLoading(false);
    async function fetchData() {
      let response = await fetch(url, options)
        .then((response) => response.json())
        .then((data) => data.products)
        .catch((error) => console.log(error))
        .finally(() => setLoading(true));
      let pros = response.map((pro) => {
        return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
      });
      setProducts([...pros]);
    }

    fetchData();

    // eslint-disable-next-line
  }, [pagination]);

  function handleActiveStatus(ind, num) {
    setActiveStatus(ind);
    setPagination(num);
  }

  return (
    <div className="deal-products py-5">
      <div className="container px-lg-5 py-2">
        <div className="head">
          <h2>daily deals!</h2>
          <div className="products-status">
            <ul className="list-unstyled d-flex justify-content-center mt-5 flex-wrap">
              <li
                className={activeSatus === 0 ? "active" : ""}
                onClick={() => handleActiveStatus(0, 0)}
              >
                New arrival
              </li>
              <li
                className={activeSatus === 1 ? "active" : ""}
                onClick={() => handleActiveStatus(1, 8)}
              >
                best sallers
              </li>
              <li
                className={activeSatus === 2 ? "active" : ""}
                onClick={() => handleActiveStatus(2, 16)}
              >
                sale items
              </li>
            </ul>
          </div>
        </div>
        <div className="products mt-5">
          <div className="row">
            {!loading &&
              skeleton.map((e) => {
                return (
                  <div
                    key={e}
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3"
                  >
                    <SkeletonTheme baseColor="#eee" highlightColor="#fff">
                      <div>
                        <Skeleton
                          style={{
                            height: "280px",
                            background: "#eee",
                            width: "100%",
                          }}
                        ></Skeleton>
                      </div>
                      <div>
                        <div>
                          <Skeleton
                            style={{
                              height: "20px",
                              background: "#eee",
                              width: "70%",
                            }}
                          ></Skeleton>
                        </div>
                        <div>
                          <Skeleton
                            style={{
                              height: "20px",
                              background: "#eee",
                              width: "60%",
                            }}
                          ></Skeleton>
                        </div>
                        <div>
                          <Skeleton
                            style={{
                              height: "20px",
                              background: "#eee",
                              width: "50%",
                            }}
                          ></Skeleton>
                        </div>
                      </div>
                    </SkeletonTheme>
                  </div>
                );
              })}
            {loading &&
              products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3"
                  >
                    <ProductBlog
                      productName={product.title}
                      productImg={product.thumbnail}
                      discount={product.discountPercentage}
                      mainPrice={product.price}
                      rating={product.rating}
                      id={product.id}
                      handleAddProductsToCart={() =>
                        handleAddProductsToCart(product)
                      }
                      handleAddProductsToWishlist={() => {
                        handleAddProductsToWishlist(product);
                      }}
                      handleAddNewProductToCompare={() => {
                        handleAddNewProductToCompare(product);
                      }}
                      UpdateQuickView={() => {
                        quickView(product);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DealProducts);
