import "./styling/cart-products.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  DeleteAllProductsInCart,
  HandleCountQty,
  HandleDeleteProductInCart,
  ProductsCart,
  Settings,
  TotalPrice,
} from "../../App";
import NoProducts from "./NoProducts";
import { useContext } from "react";
function CartProducts() {
  let productsInCart = useContext(ProductsCart);
  let handleDeleteProductsInCart = useContext(HandleDeleteProductInCart);
  let handleCountQty = useContext(HandleCountQty);
  let settings = useContext(Settings);
  let deleteAllProducts = useContext(DeleteAllProductsInCart);
  let totalPrice = useContext(TotalPrice);
  return (
    <div className="cart-products py-5">
      <div className="container px-lg-5 py-2">
        {productsInCart.length > 0 ? (
          <>
            <div className="table">
              <table className="w-100 text-center">
                <thead>
                  <tr>
                    <th>image</th>
                    <th>Product name</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>total</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsInCart.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.thumbnail}
                              className="w-100"
                              alt="product img"
                            />
                          </Link>
                        </td>
                        <td>
                          <p className="mb-0">{product.title}</p>
                        </td>
                        <td>
                          <div className="price">
                            <p className="mb-0">
                              {settings.currency === "USD" ? "$" : "€"}
                              {product.price}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="qty d-flex justify-content-center">
                            <div
                              className="minus"
                              onClick={() => handleCountQty("minus", product)}
                            >
                              <FontAwesomeIcon icon="fa-solid fa-minus" />
                            </div>
                            <div className="num">{product.count}</div>
                            <div
                              className="plus"
                              onClick={() => handleCountQty("plus", product)}
                            >
                              <FontAwesomeIcon icon="fa-solid fa-plus" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="total">
                            <p className="mb-0">
                              {settings.currency === "USD" ? "$" : "€"}
                              {(Number(product.price) * product.count).toFixed(
                                2
                              )}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="actions d-flex justify-content-center">
                            <div
                              className="delete ms-2"
                              onClick={() =>
                                handleDeleteProductsInCart(product)
                              }
                            >
                              <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="text-end">
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={5}>
                      <p className="grand mb-0">
                        Grand total :{" "}
                        <span>
                          {settings.currency === "USD" ? "$" : "€"}
                          {totalPrice}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="cart-procces row">
              <div className="col-md-6">
                <form className="row" id="coupon">
                  <div className="col-sm-8 p-0">
                    <input
                      type="text"
                      placeholder="Enter your coupon code if ypu have one"
                      className="w-100"
                      name="code"
                    />
                  </div>
                  <div className="col-sm-4 mt-sm-0 mt-4 p-0">
                    <button type="submit" className="w-100">
                      Apply Coupon
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 mt-4 mt-md-0 text-md-end">
                <div>
                  <button className="clear" onClick={deleteAllProducts}>
                    Clear Cart
                  </button>
                  <Link
                    to="/checkout"
                    className="checkout ms-md-3 mt-md-3 mt-lg-0"
                  >
                    procees to checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NoProducts />
        )}
      </div>
    </div>
  );
}

export default React.memo(CartProducts);
