import "./styling/cart-products.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import NoProducts from "./NoProducts";
import {
  DeleteProductsInCompare,
  HandleAddNewProductToCart,
  ProductInCompare,
  Settings,
} from "../../App";
export default function CompareProducts() {
  let settings = useContext(Settings);
  let productsInCompare = useContext(ProductInCompare);
  let addProductInCart = useContext(HandleAddNewProductToCart);
  let deleteProductInCompare = useContext(DeleteProductsInCompare);
  return (
    <div className="cart-products compare-products py-5">
      <div className="container px-lg-5 py-2">
        {productsInCompare.length > 0 ? (
          <>
            <div className="table">
              <table class="w-100 text-center">
                <tr className="head">
                  <th>Action</th>
                  {productsInCompare.map((pro) => {
                    return (
                      <td key={pro.id}>
                        <div className="actions d-flex justify-content-center">
                          <div
                            className="delete ms-2"
                            onClick={() => deleteProductInCompare(pro)}
                          >
                            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th>Product</th>
                  {productsInCompare.map((product) => {
                    return (
                      <td key={product.id}>
                        <div className="product-img">
                          <img src={product.thumbnail} alt="img" />
                          <h5>{product.title}</h5>
                        </div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  {productsInCompare.map((product) => {
                    return (
                      <td key={product.id}>
                        <p className="mb-0 description">
                          {product.description}
                        </p>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  {productsInCompare.map((product) => {
                    return (
                      <td key={product.id}>
                        <div className="price">
                          {settings.currency === "USD" ? "$" : "€"}
                          {product.price}
                        </div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th scope="row">Stock</th>
                  {productsInCompare.map((product) => {
                    return (
                      <td key={product.id}>
                        {Number(product.stock) > 0 ? (
                          <div className="stock">Avaliable</div>
                        ) : (
                          <div className="stock no">Not Avaliable</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th scope="row">Add to Cart</th>
                  {productsInCompare.map((product) => {
                    return (
                      <td>
                        <div className="add-to-cart">
                          <button
                            type="button"
                            onClick={() => addProductInCart(product)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </table>
            </div>
          </>
        ) : (
          <NoProducts />
        )}
      </div>
    </div>
  );
}
