import "./styling/cart-products.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import NoProducts from "./NoProducts";
import {
  DeleteAllProductsInWishlist,
  DeleteProductsInWishlist,
  HandleAddNewProductToCart,
  Settings,
} from "../../App";
import { WishlistProductss } from "./../../App";
function WishlistProducts() {
  // eslint-disable-next-line
  let wishlistProducts = useContext(WishlistProductss);
  let settings = useContext(Settings);
  let handleAddNewProductToCart = useContext(HandleAddNewProductToCart);
  let deleteAllProductInWishlist = useContext(DeleteAllProductsInWishlist);
  let deleteProductInWishlist = useContext(DeleteProductsInWishlist);
  return (
    <div className="cart-products wishlist-products py-5">
      <div className="container px-lg-5 py-2">
        {wishlistProducts.length > 0 ? (
          <>
            <div className="table">
              <table className="w-100 text-center">
                <thead>
                  <tr>
                    <th>image</th>
                    <th>Product name</th>
                    <th>price</th>
                    <th>add to cart</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistProducts.map((product) => {
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
                          <div className="add-to-cart">
                            <button
                              type="button"
                              onClick={() => handleAddNewProductToCart(product)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="actions d-flex justify-content-center">
                            <div
                              className="delete ms-2"
                              onClick={() => deleteProductInWishlist(product)}
                            >
                              <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="btns d-flex justify-content-between mt-3">
              <Link to="/shop">Countinue shopping</Link>
              <button onClick={deleteAllProductInWishlist}>
                Clear wishlist
              </button>
            </div>
          </>
        ) : (
          <NoProducts />
        )}
      </div>
    </div>
  );
}

export default React.memo(WishlistProducts);
