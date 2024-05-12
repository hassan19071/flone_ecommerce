import React from "react";
import { Link } from "react-router-dom";
import slideImg from "../imgs/single-slide-1.png";
import "./styling/main-hero.scss";
import LazyLoad from "react-lazyload";

export default function MainHero() {
  return (
    <div className="main-hero">
      <div className="container px-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-text text-center text-lg-start">
              <h3>Smart Products</h3>
              <h1>
                Summer Offer <br className="d-none d-lg-inline" /> 2024
                Collection
              </h1>
              <Link to="/shop">Shop now</Link>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5">
            <div className="hero-img text-center">
              <LazyLoad height={200} offset={100}>
                <img src={slideImg} alt="slider" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
