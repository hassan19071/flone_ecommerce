import featureImg1 from "../imgs/feature1.png";
import featureImg2 from "../imgs/feature2.png";
import featureImg3 from "../imgs/feature3.png";
import featureImg4 from "../imgs/feature4.png";
import "./styling/features.scss";

export default function Features() {
  return (
    <div className="features py-5">
      <div className="container px-lg-5 py-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="feature d-flex align-items-center">
              <div className="img">
                <img src={featureImg1} alt="feature" />
              </div>
              <div className="text ms-3">
                <h5 className="mb-0">free shipping</h5>
                <span>Free shipping on all order</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-5 mt-md-0">
            <div className="feature d-flex align-items-center">
              <div className="img">
                <img src={featureImg2} alt="feature" />
              </div>
              <div className="text ms-3">
                <h5 className="mb-0">Support 24/7</h5>
                <span>Free shipping on all order</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-5 mt-lg-0">
            <div className="feature d-flex align-items-center">
              <div className="img">
                <img src={featureImg3} alt="feature" />
              </div>
              <div className="text ms-3">
                <h5 className="mb-0">money return</h5>
                <span>Free shipping on all order</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-5 mt-lg-0">
            <div className="feature d-flex align-items-center">
              <div className="img">
                <img src={featureImg4} alt="feature" />
              </div>
              <div className="text ms-3">
                <h5 className="mb-0">order discount</h5>
                <span>Free shipping on all order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
