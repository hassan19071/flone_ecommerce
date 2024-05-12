import React from "react";
import "./styling/account.scss";
function AccountSection() {
  return (
    <div className="account py-5">
      <div className="container px-lg-5 py-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. Edit your account informaion
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="head">
                  <h3>my account information</h3>
                  <h4>your Personal details</h4>
                </div>
                <form className="row g-3 mt-3" id="personal-info">
                  <div className="col-md-6">
                    <label htmlFor="firstname2" className="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname2"
                      name="firstname"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname2" className="form-label">
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname2"
                      name="lastname"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email2" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email2"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone2" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone2"
                      name="phone"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      countinue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="accordion-item my-4">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Change your password
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="head">
                  <h3>change password</h3>
                  <h4>your password</h4>
                </div>
                <form className="row g-3 mt-3" id="pass">
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="confirm" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm"
                      name="confirm"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Upadte password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Modify your address book entries
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="head">
                  <h3>address book entries</h3>
                </div>
                <div className="address text-center">
                  <div className="details d-flex flex-column align-items-center">
                    <span>Hassan khaled</span>
                    <span>Paul Park</span>
                    <span>Lorem Ipsum Dolor Set Amet</span>
                    <span>minia city</span>
                  </div>
                  <div className="btns d-flex justify-content-center">
                    <button className="me-2 edit">Edit</button>
                    <button className="ms-2 delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AccountSection);
