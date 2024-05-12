import LazyLoad from "react-lazyload";
import "./styling/contact.scss";

export default function ContactSection() {
  return (
    <div className="contact py-5">
      <div className="container px-lg-5 py-5">
        <div className="map">
          <LazyLoad height={200} offset={100}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381932.6535964927!2d98.95344311348886!3d3.3598606662054857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x23d431c8a6908262!2z2YXZitiv2KfZhiwgTWVkYW4gQ2l0ediMINiz2YjZhdi32LHYqSDYp9mE2LTZhdin2YTZitip2Iwg2KXZhtiv2YjZhtmK2LPZitin!5e0!3m2!1sar!2seg!4v1714076042380!5m2!1sar!2seg"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </LazyLoad>
        </div>
        <div className="contact-form mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-details">
                <h3>Contact Info</h3>
                <div className="infos">
                  <div className="info d-flex mt-4 align-items-center">
                    <h5 className="me-4">Phone:</h5>
                    <a href="tel:+201152205570">+201152205570</a>
                  </div>
                  <div className="info d-flex mt-4 align-items-center">
                    <h5 className="me-4">Email:</h5>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </div>
                  <div className="info d-flex mt-4 align-items-center">
                    <h5 className="me-4">Address:</h5>
                    <span>123,Street</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-4">
              <div className="form">
                <form className="row" action="" id="contact-data">
                  <div className="col-md-6">
                    <label name="first-name" htmlFor="firstname">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="first-name"
                      id="firstname"
                      name="first"
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4">
                    <label name="last-name" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="last-name"
                      id="lastname"
                      name="lastname"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <label name="subject" htmlFor="subject">
                      subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="subject"
                      id="subject"
                      name="subject"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <label name="message" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      aria-label="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
