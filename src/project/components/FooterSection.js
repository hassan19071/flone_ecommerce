/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styling/footer.scss";
export default function Footer(){
    return(
        <div className="footer py-5">
            <div className="container px-lg-5 py-2">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="logo d-flex flex-column pt-md-4">
                           <img src={logo} alt="logo"/>
                           <p className="mt-3">&copy; 2024 <a href="#">Flone</a></p>
                           <p>All right reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="links">
                           <h3>About us</h3>
                           <ul className="list-unstyled">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a href="#">Store location</a>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                            <li>
                                <a href="#">Store location</a>
                            </li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="links">
                           <h3>useful links</h3>
                           <ul className="list-unstyled">
                            <li>
                                <a href="#">Returns</a>
                            </li>
                            <li>
                                <a href="#">support policy</a>
                            </li>
                            <li>
                                <a href="#">Size Guide</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="subscribe">
                           <h3>subscribe</h3>
                           <p>Get E-mail updates about our latest shop and special offers.</p>
                           <form action="" id="subscribe">
                            <input type="email" placeholder="Enter your email address.." name="email"/>
                            <button>Subscribe</button>
                           </form>
                           <div className="social-media">
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}