import React, { useContext, useEffect, useState } from "react";
import ProductBlog from "./ProductBlog";
import "./styling/shop.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AddQuickViewProduct,
  HandleAddNewProductToCart,
  HandleAddNewProductToCompare,
  HandleAddNewProductToWishlist,
} from "../../App";

function ShopSection() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [categories, setCategories] = useState([]);
  // eslint-disable-next-line
  let [pagination, setPagination] = useState(0);
  let [showenProducts, setShowenProducts] = useState([]);
  let [skeleton] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);
  let handleAddProductsToCart = useContext(HandleAddNewProductToCart);
  let handleAddProductsToWishlist = useContext(HandleAddNewProductToWishlist);
  let handleAddNewProductToCompare = useContext(HandleAddNewProductToCompare);
  let quickView = useContext(AddQuickViewProduct);
  let [filterByPrice, setFilterByPrice] = useState("default");
  let nPage = Math.ceil(products.length / 12);

  let [url, setUrl] = useState("https://dummyjson.com/products/?limit=0");
  let categoriesUrl = "https://dummyjson.com/products/categories";
  // eslint-disable-next-line no-use-before-define
  let showenUrl = `${url.slice(0, -8)}?limit=12&skip=${pagination}`;
  let [checkedMark, setCheckedMark] = useState();

  const options = {
    method: "GET",
  };
  useEffect(() => {
    setLoading(false);
    async function fetchData() {
      let request = await fetch(url, options)
        .then((response) => response.json())
        .then((data) => data.products)
        .catch((error) => alert(error))
        .finally(() => setLoading(true));
      if (filterByPrice === "l") {
        const lth = request.sort((a, b) => a.price - b.price);
        let pros = lth.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setProducts([...pros]);
      } else if (filterByPrice === "h") {
        const lth = request.sort((a, b) => a.price - b.price).reverse();
        let pros = lth.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setProducts([...pros]);
      } else {
        let pros = request.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setProducts([...pros]);
      }
    }

    async function fetchCategories() {
      let request = await fetch(categoriesUrl, options)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => alert(error))
        .finally(() => setLoading(true));
      setCategories([...request]);
    }

    async function fetchShownProducts() {
      let request = await fetch(showenUrl, options)
        .then((response) => response.json())
        .then((data) => data.products)
        .catch((error) => alert(error))
        .finally(() => setLoading(true));
      if (filterByPrice === "l") {
        const lth = request.sort((a, b) => a.price - b.price);
        let pros = lth.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setShowenProducts([...pros]);
      } else if (filterByPrice === "h") {
        const lth = request.sort((a, b) => a.price - b.price).reverse();
        let pros = lth.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setShowenProducts([...pros]);
      } else {
        let pros = request.map((pro) => {
          return pro.count === undefined ? { ...pro, count: 1 } : { ...pro };
        });
        setShowenProducts([...pros]);
      }
    }

    fetchData();
    fetchCategories();
    fetchShownProducts();
    // eslint-disable-next-line
  }, [pagination, url, filterByPrice]);

  function handlePagination(num) {
    setPagination(num);
  }

  let nPagination = [...Array(nPage + 1).keys()].slice(1);

  function filterByCategory(cate) {
    if (cate === "all categories") {
      setUrl("https://dummyjson.com/products/?limit=0");
      setCheckedMark("all");
    } else {
      setUrl(`https://dummyjson.com/products/category/${cate}?limit=0`);
      setCheckedMark(cate);
    }
    setPagination(0);
  }
  function handlePriceFilter(e) {
    setFilterByPrice(e.target.value);
  }

  return (
    <div className="shop py-5">
      <div className="container px-lg-5 py-4">
        <div className="row">
          <div className="col-lg-3 order-lg-1 order-2">
            <div className="filter">
              <div className="categories">
                <h4>Categories</h4>
                <div className="types ">
                  {!loading && "loading.."}
                  {loading && (
                    <div className="checkbox-wrapper-13">
                      <input
                        id="1-13"
                        name="category"
                        type="radio"
                        checked={checkedMark === "all"}
                        onChange={() => filterByCategory("all categories")}
                      />
                      <label htmlFor="1-13">all categories</label>
                    </div>
                  )}
                  {loading &&
                    categories.map((category) => {
                      return (
                        <div key={category} className="checkbox-wrapper-13">
                          <input
                            id={category}
                            name="category"
                            checked={checkedMark === category}
                            type="radio"
                            onChange={() => filterByCategory(category)}
                          />
                          <label htmlFor={category}>{category}</label>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 mb-lg-0 mb-5 order-lg-2 order-1">
            <div className="products">
              <div className="head d-flex align-items-center">
                <select onChange={handlePriceFilter} value={filterByPrice}>
                  <option value="d">Default</option>
                  <option value="h">Price (High to Low)</option>
                  <option value="l">Price (Low to High)</option>
                </select>
                <div className="num-of-products ms-3">
                  Showing {showenProducts.length} of {products.length} result
                </div>
              </div>
              <div className="showen-products">
                <div className="row mt-5">
                  {!loading &&
                    skeleton.map((e) => {
                      return (
                        <div key={e} className="col-md-4 col-sm-6 col-12 mt-3">
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
                    showenProducts.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="col-md-4 col-sm-6 col-12 mt-3"
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
            <div className="pagination mt-5">
              <ul className="list-unstyled d-flex w-100">
                {nPage === 1 ? (
                  <></>
                ) : (
                  nPagination.map((pag) => {
                    return (
                      <li
                        key={pag}
                        onClick={() => handlePagination((pag - 1) * 12)}
                        className={pagination === (pag - 1) * 12 && "active"}
                      >
                        {pag}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ShopSection);
