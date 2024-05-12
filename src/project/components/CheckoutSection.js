import React, { useContext } from "react";
import "./styling/checkout.scss";
import { ProductsCart, Settings, TotalPrice } from "../../App";

function CheckoutSection() {
  let settings = useContext(Settings);
  let productInCart = useContext(ProductsCart);
  let total = useContext(TotalPrice);
  return (
    <div className="checkout py-5">
      <div className="container px-lg-5 py-3">
        <div className="row">
          <div className="col-lg-7">
            <div className="billing-details">
              <h4>Billing details</h4>
              <form className="row g-3" id="checkout-process">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">
                    Firstname
                  </label>
                  <input type="text" className="form-control" id="firstname" name="firstname"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Lastname
                  </label>
                  <input type="text" className="form-control" id="lastname" name="lastname"/>
                </div>
                <div className="col-12">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-control" id="country">
                    <option>Egypt</option>
                    <option>Saudi</option>
                    <option>Emirates</option>
                    <option>Qatar</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="address"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    name="address2"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" name="city"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputZip" className="form-label">
                    Postcode / Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" name="zip" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control" id="phone" name="phone" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email" name="email"/>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mt-lg-0 mt-5">
            <div className="order-details">
              <h4>Your Order</h4>
              <div className="order">
                <div className="title d-flex justify-content-between">
                  <h6>Product</h6>
                  <h6>Total</h6>
                </div>
                <div className="products-info">
                  {productInCart.length > 0 ? (
                    productInCart.map((pro) => {
                      return (
                        <div
                          key={pro.id}
                          className="info d-flex justify-content-between py-2"
                        >
                          <span className="name">{pro.title}</span>
                          <span className="name">
                            {settings.currency === "USD" ? "$" : "€"}
                            {pro.price}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <p>no products!</p>
                  )}
                </div>
                <div className="shipping d-flex justify-content-between py-3">
                  <span>Shipping</span>
                  <span>Free shipping</span>
                </div>
                <div className="total d-flex justify-content-between ">
                  <span>Total</span>
                  <span className="total-price">
                    {settings.currency === "USD" ? "$" : "€"}
                    {total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CheckoutSection);
