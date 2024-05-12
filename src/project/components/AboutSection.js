import LazyLoad from "react-lazyload";
import banner1 from "../imgs/banner-1.jpg";
import banner2 from "../imgs/banner-2.jpg";
import banner3 from "../imgs/banner-3.jpg";
import "./styling/about.scss";
export default function AboutSection() {
  return (
    <div className="about py-5">
      <div className="container px-lg-5 py-3">
        <div className="head text-center">
          <h2>Who are we</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="plans">
              <div className="img">
                <LazyLoad height={200} offset={100}>
                  <img src={banner1} alt="watch" />
                </LazyLoad>
              </div>
              <div className="text">
                <h4>Our vision</h4>
                <p>
                  Flone provide how all this mistaken idea of denounc pleasure
                  and sing pain was born an will give you a ete account of the
                  system, and expound the actual teangs the eat explorer of the
                  truth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="plans">
              <div className="img">
                <LazyLoad height={200} offset={100}>
                  <img src={banner2} alt="bag" />
                </LazyLoad>
              </div>
              <div className="text">
                <h4>Our mission</h4>
                <p>
                  Flone provide how all this mistaken idea of denounc pleasure
                  and sing pain was born an will give you a ete account of the
                  system, and expound the actual teangs the eat explorer of the
                  truth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="plans">
              <div className="img">
                <LazyLoad height={200} offset={100}>
                  <img src={banner3} alt="glasses" />
                </LazyLoad>
              </div>
              <div className="text">
                <h4>Our goal</h4>
                <p>
                  Flone provide how all this mistaken idea of denounc pleasure
                  and sing pain was born an will give you a ete account of the
                  system, and expound the actual teangs the eat explorer of the
                  truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
