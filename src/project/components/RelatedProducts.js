import React, { useContext, useEffect, useState } from "react";
import ProductBlog from "./ProductBlog";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AddQuickViewProduct,
  HandleAddNewProductToCart,
  HandleAddNewProductToCompare,
  HandleAddNewProductToWishlist,
} from "../../App";
function RelatedProducts({ productCategory, loading, productId }) {
  let url = `https://dummyjson.com/products/category/${productCategory}`;
  let [products, setProducts] = useState([]);
  let [skeleton] = useState(["1", "2", "3", "4"]);
  let handleAddProductsToCart = useContext(HandleAddNewProductToCart);
  let handleAddProductsToWishlist = useContext(HandleAddNewProductToWishlist);
  let handleAddNewProductToCompare = useContext(HandleAddNewProductToCompare);
  let quickView = useContext(AddQuickViewProduct);
  const options = {
    method: "GET",
  };
  useEffect(() => {
    async function fetchData() {
      let request = await fetch(url, options)
        .then((response) => response.json())
        .then((data) => data.products)
        .catch((error) => alert(error));
      let filterProducts = request.filter((pro) => {
        return pro.id !== productId;
      });
      let pros = filterProducts.map((pro) => {
        return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
      });
      setProducts([...pros]);
    }
    fetchData();
    // eslint-disable-next-line
  }, [url]);
  return (
    <div className="related pt-3 pb-5">
      <div className="container px-lg-5 py-3">
        <h3 style={{ fontSize: "27px", fontWeight: "bold" }}>
          Related Products
        </h3>
        <div className="row mt-5">
          {loading
            ? products.map((product) => {
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
                      UpdateQuickView={() => {
                        quickView(product);
                      }}
                      handleAddProductsToCart={() =>
                        handleAddProductsToCart(product)
                      }
                      handleAddProductsToWishlist={() => {
                        handleAddProductsToWishlist(product);
                      }}
                      handleAddNewProductToCompare={() => {
                        handleAddNewProductToCompare(product);
                      }}
                    />
                  </div>
                );
              })
            : skeleton.map((e) => {
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
        </div>
      </div>
    </div>
  );
}
export default React.memo(RelatedProducts);
