import React, { useContext, useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styling/header.scss";
import {
  Settings,
  HandleSettings,
  ProductsCart,
  HandleDeleteProductInCart,
  TotalPrice,
  WishlistProductss,
  ProductInCompare,
} from "../../App";

function HeaderSection() {
  let [serachBar, setSerachBar] = useState(false);
  let [accountLinks, setAccountLinks] = useState(false);
  let [miniCart, setMiniCart] = useState(false);
  let [menuLinks, setMenuLinks] = useState(false);
  let settings = useContext(Settings);
  let handleSettings = useContext(HandleSettings);
  let productsIncart = useContext(ProductsCart);
  let handleDeleteProductsInCart = useContext(HandleDeleteProductInCart);
  let totalPrice = useContext(TotalPrice);
  let productInWishlist = useContext(WishlistProductss);
  let productsInCompare = useContext(ProductInCompare);

  return (
    <div className="header-container">
      <div className="top-header d-lg-block d-none">
        <div className="container px-lg-5">
          <div className="top-head-content d-flex justify-content-between align-items-center">
            <div className="settings d-flex align-items-center">
              <div className="langs position-relative me-3">
                <span className="selected-lang">
                  {settings.lang}{" "}
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                </span>
                <div className="langs-list d-flex flex-column position-absolute">
                  <span onClick={() => handleSettings("language", "English")}>
                    English
                  </span>
                  <span onClick={() => handleSettings("language", "Arabic")}>
                    Arabic
                  </span>
                  <span onClick={() => handleSettings("language", "French")}>
                    French
                  </span>
                </div>
              </div>
              <div className="currency position-relative mx-3">
                <span className="selected-currency">
                  {settings.currency}{" "}
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                </span>
                <div className="currencies-list d-flex flex-column position-absolute">
                  <span onClick={() => handleSettings("currency", "USD")}>
                    USD
                  </span>
                  <span onClick={() => handleSettings("currency", "EUR")}>
                    EUR
                  </span>
                </div>
              </div>
              <div className="call ms-3">Call Us +123-123-123</div>
            </div>
            <div className="delivery">
              Free delivery on order over{" "}
              <span>{settings.currency === "USD" ? "$" : "€"}200.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-container">
        <div className="container px-lg-5">
          <div className="navbar align-items-center py-lg-2 py-4 position-relative">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="links d-lg-block d-none">
              <ul className="list-unstyled d-flex mb-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Collection</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="user-shopping d-flex">
              <div
                className="search me-3 d-lg-block d-none"
                onClick={() => setSerachBar(!serachBar)}
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </div>
              <div
                className="account mx-3 d-lg-block d-none"
                onClick={() => setAccountLinks(!accountLinks)}
              >
                <FontAwesomeIcon icon="fa-solid fa-circle-user" />
              </div>
              <div className="compare mx-3">
                <Link to="/compare">
                  <FontAwesomeIcon icon="fa-solid fa-code-compare" />
                  <span>{productsInCompare.length}</span>
                </Link>
              </div>
              <div className="wishlist mx-3">
                <Link to="/wishlist">
                  <FontAwesomeIcon icon="fa-solid fa-heart" />
                  <span>{productInWishlist.length}</span>
                </Link>
              </div>
              <div
                className="cart me-lg-0 me-3 ms-3"
                onClick={() => setMiniCart(!miniCart)}
              >
                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                <span>{productsIncart.length}</span>
              </div>
              <div
                className="menu ms-3 d-lg-none"
                onClick={() => setMenuLinks(!menuLinks)}
              >
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              </div>
            </div>
            <div
              className={
                serachBar
                  ? "searchbar active position-absolute d-lg-block d-none"
                  : "searchbar position-absolute d-lg-block d-none"
              }
            >
              <form action="" id="search-bar">
                <input type="text" placeholder="Search" name="search"/>
                <button type="submit">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
            <div
              className={
                accountLinks
                  ? "account-links active position-absolute d-lg-flex flex-column d-none"
                  : "account-links position-absolute d-lg-flex flex-column d-none"
              }
            >
              <Link to="/login">Login</Link>
              <Link to="/register" className="my-2">
                Register
              </Link>
              <Link to="/account">Account</Link>
            </div>
            <div
              className={
                miniCart
                  ? "mini-cart active position-absolute"
                  : "mini-cart position-absolute"
              }
            >
              {productsIncart.length > 0 ? (
                <>
                  {" "}
                  <div className="products">
                    {productsIncart.map((product) => {
                      return (
                        <div key={product.id} className="cart-product row">
                          <div className="col-4">
                            <div className="img">
                              <img
                                alt="product img"
                                src={product.thumbnail}
                                width="100%"
                                height={"100px"}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="details mx-3">
                              <h6>
                                <Link to={`/product/${product.id}`}>
                                  {product.title}
                                </Link>
                              </h6>
                              <div className="qty">qty: {product.count}</div>
                              <div className="price">
                                {settings.currency === "USD" ? "$" : "€"}
                                {product.price}
                              </div>
                              <div className="color">
                                brand: {product.brand}
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <div
                              className="x"
                              onClick={() =>
                                handleDeleteProductsInCart(product)
                              }
                            >
                              <FontAwesomeIcon icon="fa-solid fa-x" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="btns">
                    <div className="total text-end">
                      Total: {settings.currency === "USD" ? "$" : "€"}
                      {totalPrice}
                    </div>
                    <div className="go-to-cart">
                      <Link to="/cart">view cart</Link>
                    </div>
                    <div className="go-to-checkout">
                      <Link to="/checkout">checkout</Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-products text-center">
                  No Items Added To Cart!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          menuLinks
            ? "nav-mobile-container active position-fixed"
            : "nav-mobile-container position-fixed"
        }
      >
        <div className="mobile-navbar">
          <div
            className="x position-absolute"
            onClick={() => setMenuLinks(!menuLinks)}
          >
            <FontAwesomeIcon icon="fa-solid fa-x" />
          </div>
          <div className="searchbar-mobile">
            <form action="" id="search-mobile">
              <input type="text" placeholder="Search" name="search" />
              <button type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
          </div>
          <div className="mobile-links d-flex flex-column">
            <Link to="/">Home</Link>
            <Link to="/shop">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/account">Account</Link>
          </div>
          <div className="settings mt-2">
            <div className="lang">
              <label>Language</label>
              <select>
                <option>English</option>
                <option>Arabic</option>
                <option>French</option>
              </select>
            </div>
            <div className="currency mt-4">
              <label>Currency</label>
              <select>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
          <div className="contact-info mt-4">
            <div className="phone-number">
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <a href="tel:+123-123-123"> +123-123-123</a>
            </div>
            <div className="email">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <a href="mailto:exapmle@demo.com"> Example@demo.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HeaderSection);
