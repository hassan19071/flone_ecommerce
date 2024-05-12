/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./project/Home";
import { createContext, useEffect, useState } from "react";
import About from "./project/About";
import Contact from "./project/Contact";
import Cart from "./project/Cart";
import Wishlist from "./project/Wishlist";
import Compare from "./project/Compare";
import Checkout from "./project/Checkout";
import Account from "./project/Account";
import Login from "./project/Login";
import Register from "./project/Register";
import NoPage from "./project/404Page";
import Shop from "./project/Shop";
import ProductDetails from "./project/ProductDetails";
// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// global settings
export const Settings = createContext();
export const HandleSettings = createContext();

// cart
export const ProductsCart = createContext();
export const HandleAddNewProductToCart = createContext();
export const HandleDeleteProductInCart = createContext();
export const HandleCountQty = createContext();
export const DeleteAllProductsInCart = createContext();
export const TotalPrice = createContext();

// wishlist sharing data
export const WishlistProductss = createContext();
export const HandleAddNewProductToWishlist = createContext();
export const DeleteProductsInWishlist = createContext();
export const DeleteAllProductsInWishlist = createContext();

// compare sharing data
export const ProductInCompare = createContext();
export const HandleAddNewProductToCompare = createContext();
export const DeleteProductsInCompare = createContext();

// quick view
export const QuickViewProduct = createContext();
export const AddQuickViewProduct = createContext();

function App() {
  //cart settings
  let [productsIncart, setProductsInCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  function handleAddNewProductToCart(newProduct) {
    let fil = productsIncart.filter((pro) => {
      return pro.id === newProduct.id;
    });
    if (fil.length > 0) {
      toast.error("already have added", {
        className: "toast-msg",
        autoClose: 2000,
      });
    } else {
      setProductsInCart([...productsIncart, newProduct]);
      toast.success("added to the cart!", {
        autoClose: 2000,
        className: "toast-msg",
      });
    }
  }
  function handleDeleteProductInCart(product) {
    let updateCart = productsIncart.filter((pro) => {
      return pro.id !== product.id;
    });
    setProductsInCart([...updateCart]);
    toast.success("deleted successful!", {
      autoClose: 2000,
      className: "toast-msg",
    });
  }
  function deleteAllProductsInCart() {
    setProductsInCart([]);
  }
  function handleCountQty(process, product) {
    let updateCartPlus = productsIncart.map((pro) => {
      return pro.id === product.id
        ? { ...pro, count: pro.count + 1 }
        : { ...pro };
    });
    let updateCartMinus = productsIncart.map((pro) => {
      return pro.id === product.id && pro.count > 1
        ? { ...pro, count: pro.count - 1 }
        : { ...pro };
    });
    if (process === "plus") {
      setProductsInCart(updateCartPlus);
    }
    if (process === "minus") {
      setProductsInCart(updateCartMinus);
    }
  }
  // global setting
  let [settings, setSettings] = useState({ lang: "English", currency: "USD" });
  function handleSettings(setting, update) {
    if (setting === "language") {
      setSettings({ ...settings, lang: update });
    } else {
      setSettings({ ...settings, currency: update });
    }
  }

  useEffect(() => {
    let total = productsIncart.reduce((all, one) => {
      return all + parseInt(one.price) * one.count;
    }, 0);
    setTotalPrice(total);
  }, [
    handleCountQty,
    handleAddNewProductToCart,
    handleDeleteProductInCart,
    deleteAllProductsInCart,
  ]);

  // wishlist settings
  let [productsInWishlist, setProductsInWishlist] = useState([]);

  function handleAddNewProductInWishlist(newProduct) {
    let fil = productsInWishlist.filter((pro) => {
      return pro.id !== newProduct.id;
    });

    if (!fil.includes(newProduct)) {
      setProductsInWishlist([...fil, newProduct]);
      toast.success("added to wishlist!", {
        autoClose: 2000,
        className: "toast-msg",
      });
    }
  }

  function handleDeleteProductInWishlist(product) {
    let updateCart = productsInWishlist.filter((pro) => {
      return pro.id !== product.id;
    });
    setProductsInWishlist([...updateCart]);
  }
  function deleteAllProductsInWishlist() {
    setProductsInWishlist([]);
  }

  // compare settings
  let [productsInCompare, setProductsInCompare] = useState([]);

  function handleAddNewProductInCompare(newProduct) {
    let fil = productsInCompare.filter((pro) => {
      return pro.id !== newProduct.id;
    });
    if (!fil.includes(newProduct)) {
      setProductsInCompare([...fil, newProduct]);
      toast.success("added to compare!", {
        autoClose: 2000,
        className: "toast-msg",
      });
    }
  }

  function handleDeleteProductInCompare(product) {
    let updateCart = productsInCompare.filter((pro) => {
      return pro.id !== product.id;
    });
    setProductsInCompare([...updateCart]);
  }

  // quick view product
  let [quickViewProduct, setQuickViewProduct] = useState();
  function handleAddQuickViewProduct(product) {
    setQuickViewProduct(product);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <ProductsCart.Provider value={productsIncart}>
                  <HandleAddNewProductToCart.Provider
                    value={handleAddNewProductToCart}
                  >
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <TotalPrice.Provider value={totalPrice}>
                        <WishlistProductss.Provider value={productsInWishlist}>
                          <HandleAddNewProductToWishlist.Provider
                            value={handleAddNewProductInWishlist}
                          >
                            <ProductInCompare.Provider
                              value={productsInCompare}
                            >
                              <HandleAddNewProductToCompare.Provider
                                value={handleAddNewProductInCompare}
                              >
                                <AddQuickViewProduct.Provider
                                  value={handleAddQuickViewProduct}
                                >
                                  <QuickViewProduct.Provider
                                    value={quickViewProduct}
                                  >
                                    <Home />
                                  </QuickViewProduct.Provider>
                                </AddQuickViewProduct.Provider>
                              </HandleAddNewProductToCompare.Provider>
                            </ProductInCompare.Provider>
                          </HandleAddNewProductToWishlist.Provider>
                        </WishlistProductss.Provider>
                      </TotalPrice.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </HandleAddNewProductToCart.Provider>
                </ProductsCart.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/about"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <About />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/contact"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <Contact />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/cart"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <ProductsCart.Provider value={productsIncart}>
                  <HandleDeleteProductInCart.Provider
                    value={handleDeleteProductInCart}
                  >
                    <HandleCountQty.Provider value={handleCountQty}>
                      <DeleteAllProductsInCart.Provider
                        value={deleteAllProductsInCart}
                      >
                        <TotalPrice.Provider value={totalPrice}>
                          <WishlistProductss.Provider
                            value={productsInWishlist}
                          >
                            <ProductInCompare.Provider
                              value={productsInCompare}
                            >
                              <Cart />
                            </ProductInCompare.Provider>
                          </WishlistProductss.Provider>
                        </TotalPrice.Provider>
                      </DeleteAllProductsInCart.Provider>
                    </HandleCountQty.Provider>
                  </HandleDeleteProductInCart.Provider>
                </ProductsCart.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <HandleAddNewProductToCart.Provider
                        value={handleAddNewProductToCart}
                      >
                        <DeleteAllProductsInWishlist.Provider
                          value={deleteAllProductsInWishlist}
                        >
                          <WishlistProductss.Provider
                            value={productsInWishlist}
                          >
                            <DeleteProductsInWishlist.Provider
                              value={handleDeleteProductInWishlist}
                            >
                              <ProductInCompare.Provider
                                value={productsInCompare}
                              >
                                <Wishlist />
                              </ProductInCompare.Provider>
                            </DeleteProductsInWishlist.Provider>
                          </WishlistProductss.Provider>
                        </DeleteAllProductsInWishlist.Provider>
                      </HandleAddNewProductToCart.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/compare"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <DeleteProductsInCompare.Provider
                            value={handleDeleteProductInCompare}
                          >
                            <HandleAddNewProductToCart.Provider
                              value={handleAddNewProductToCart}
                            >
                              <Compare />
                            </HandleAddNewProductToCart.Provider>
                          </DeleteProductsInCompare.Provider>
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/checkout"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <Checkout />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/account"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <Account />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/login"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <Login />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/register"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <Register />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/*"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <WishlistProductss.Provider value={productsInWishlist}>
                        <ProductInCompare.Provider value={productsInCompare}>
                          <NoPage />
                        </ProductInCompare.Provider>
                      </WishlistProductss.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/shop"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <TotalPrice.Provider value={totalPrice}>
                  <ProductsCart.Provider value={productsIncart}>
                    <HandleAddNewProductToCart.Provider
                      value={handleAddNewProductToCart}
                    >
                      <HandleDeleteProductInCart.Provider
                        value={handleDeleteProductInCart}
                      >
                        <WishlistProductss.Provider value={productsInWishlist}>
                          <HandleAddNewProductToWishlist.Provider
                            value={handleAddNewProductInWishlist}
                          >
                            <ProductInCompare.Provider
                              value={productsInCompare}
                            >
                              <HandleAddNewProductToCompare.Provider
                                value={handleAddNewProductInCompare}
                              >
                                <AddQuickViewProduct.Provider
                                  value={handleAddQuickViewProduct}
                                >
                                  <QuickViewProduct.Provider
                                    value={quickViewProduct}
                                  >
                                    <Shop />
                                  </QuickViewProduct.Provider>
                                </AddQuickViewProduct.Provider>
                              </HandleAddNewProductToCompare.Provider>
                            </ProductInCompare.Provider>
                          </HandleAddNewProductToWishlist.Provider>
                        </WishlistProductss.Provider>
                      </HandleDeleteProductInCart.Provider>
                    </HandleAddNewProductToCart.Provider>
                  </ProductsCart.Provider>
                </TotalPrice.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <Settings.Provider value={settings}>
              <HandleSettings.Provider value={handleSettings}>
                <ProductsCart.Provider value={productsIncart}>
                  <HandleAddNewProductToCart.Provider
                    value={handleAddNewProductToCart}
                  >
                    <HandleDeleteProductInCart.Provider
                      value={handleDeleteProductInCart}
                    >
                      <TotalPrice.Provider value={totalPrice}>
                        <HandleCountQty.Provider value={handleCountQty}>
                          <WishlistProductss.Provider
                            value={productsInWishlist}
                          >
                            <HandleAddNewProductToWishlist.Provider
                              value={handleAddNewProductInWishlist}
                            >
                              <ProductInCompare.Provider
                                value={productsInCompare}
                              >
                                <HandleAddNewProductToCompare.Provider
                                  value={handleAddNewProductInCompare}
                                >
                                  <AddQuickViewProduct.Provider
                                    value={handleAddQuickViewProduct}
                                  >
                                    <QuickViewProduct.Provider
                                      value={quickViewProduct}
                                    >
                                      <ProductDetails />
                                    </QuickViewProduct.Provider>
                                  </AddQuickViewProduct.Provider>
                                </HandleAddNewProductToCompare.Provider>
                              </ProductInCompare.Provider>
                            </HandleAddNewProductToWishlist.Provider>
                          </WishlistProductss.Provider>
                        </HandleCountQty.Provider>
                      </TotalPrice.Provider>
                    </HandleDeleteProductInCart.Provider>
                  </HandleAddNewProductToCart.Provider>
                </ProductsCart.Provider>
              </HandleSettings.Provider>
            </Settings.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
