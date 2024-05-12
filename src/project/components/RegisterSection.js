import { Link } from "react-router-dom";
import "./styling/account.scss";
import React, { useState } from "react";

function RegisterSection() {
  // eslint-disable-next-line
  let [loading, setLoading] = useState(false);
  let [user, setUser] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptedRules: false,
    email: "",
  });
  let [errors, setErrors] = useState({});

  function handleFullName(e) {
    setUser({ ...user, fullName: e.target.value });
  }
  function handleEmail(e) {
    setUser({ ...user, email: e.target.value });
  }
  function handlePhone(e) {
    setUser({ ...user, phone: e.target.value });
  }
  function handlePassword(e) {
    setUser({ ...user, password: e.target.value });
  }
  function handleConfirmPassword(e) {
    setUser({ ...user, confirmPassword: e.target.value });
  }
  function handleAcceptedRules(e) {
    setUser({ ...user, acceptedRules: e.target.checked });
  }

  function validation() {
    let errors = {};
    if (user.fullName.trim() === "" || /\d/.test(user.fullName)) {
      if (user.fullName.trim() === "") {
        errors.nameError = "name is required";
      } else {
        errors.nameError = "name has not to contains numbers";
      }
    } else {
      errors.nameError = "";
    }

    if (user.email.trim() === "" || !user.email.includes("@")) {
      if (user.email.trim() === "") {
        errors.emailError = "Email is required";
      } else {
        errors.emailError = "please type valid email";
      }
    } else {
      errors.emailError = "";
    }

    if (user.phone.trim() === "" || !/\d/.test(user.phone)) {
      if (user.phone.trim() === "") {
        errors.phoneError = "Phone number is required";
      } else {
        errors.phoneError = "please type valid phone number";
      }
    } else {
      errors.phoneError = "";
    }
    if (user.password === "" || user.password.length < 6) {
      errors.passwordError =
        "password has to contains atleast characters more than 6";
    } else {
      errors.passwordError = "";
    }
    if (user.confirmPassword !== user.password) {
      errors.confirmPasswordError = "Password is not match";
    } else {
      errors.confirmPasswordError = "";
    }

    return errors;
  }

  function submitForm(e) {
    e.preventDefault();
    setErrors(validation());
  }

  return (
    <div className="login py-5">
      <div className="container px-lg-5 py-5">
        <div className="login-form">
          <form action="" onSubmit={submitForm}>
            <div className="row">
              <div className="col-12">
                <label className="d-inline">Full Name *</label>
                <input
                  type="text"
                  value={user.fullName}
                  onChange={handleFullName}
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4">
                <label>Email *</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={handleEmail}
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4">
                <label>Phone *</label>
                <input
                  type="text"
                  placeholder="ex:+201152205570"
                  value={user.phone}
                  onChange={handlePhone}
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4">
                <label>Password *</label>
                <input
                  type="password"
                  value={user.password}
                  onChange={handlePassword}
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  value={user.confirmPassword}
                  onChange={handleConfirmPassword}
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4 d-flex flex-row-reverse justify-content-end">
                <label htmlFor="checkbox" className="ms-2">
                  I've read and accept the Privacy Policy
                </label>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={user.acceptedRules}
                  onChange={handleAcceptedRules}
                />
              </div>
              <div className="col-12 mt-2 accepted-msg">
                <p className="mb-0">
                  By signing up, you agree to our{" "}
                  <Link to={"/"}>Terms of Service.</Link> Learn how we collect
                  and use your data in our <Link to={"/"}>Privacy Policy.</Link>
                </p>
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  disabled={!user.acceptedRules}
                  className="d-flex align-items-center justify-content-center"
                >
                  Signup{" "}
                  {loading && (
                    <div className="spinner-border ms-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
              <div className="col-12 mt-4 text-center">
                <Link to={"/login"} className="forget link d-block">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
        {Object.keys(errors).length > 0 ? (
          <div className="msg error">
            {errors.nameError && <p className="my-1">{errors.nameError}</p>}
            {errors.emailError && <p className="my-1">{errors.emailError}</p>}
            {errors.phoneError && <p className="my-1">{errors.phoneError}</p>}
            {errors.passwordError && (
              <p className="my-1">{errors.passwordError}</p>
            )}
            {errors.confirmPasswordError && (
              <p className="my-1">{errors.confirmPasswordError}</p>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default React.memo(RegisterSection);
