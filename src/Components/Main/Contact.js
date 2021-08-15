import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
    ============================================= */}
      <div className="site-breadcrumb-title" style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}>
        <h2>Contact Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area clearfix">
        {/* Start About
		============================================= */}
        <div className="contact-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">// Get in Touch</span>
                  <h2>Ready to Get Started?</h2>
                </div>
              </div>
            </div>
            <div className="contact-wrapper">
              <div className="contact-inputs">
                <h5 className="contact-tl-1">GET IN TOUCH</h5>
                <form
                  className="contact-form"
                  method="post"
                  action="https://siteforest.tech/templatebucket/besi/assets/mail/contact.php"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="website">website</label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          id="website"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="comments">Message</label>
                        <textarea
                          className="form-control labelup"
                          id="comments"
                          name="comments"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                      <div className="contact-sub-btn">
                        <button type="submit" name="submit" id="submit">
                          Send Message
                        </button>
                      </div>
                      {/* Alert Message */}
                      <div className="alert-notification">
                        <div id="message" className="alert-msg" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-addr">
                <h5 className="contact-tl-1">CONTACT INFO</h5>
                <div className="contact-addr-box">
                  <div className="contact-addr-single">
                    <i className="fas fa-phone" />
                    <p>
                      +0044 545 989 626 <br />
                      +0044 545 989 626
                    </p>
                  </div>
                  <div className="contact-addr-single">
                    <i className="far fa-envelope" />
                    <p>
                      www.yourwebsite.com
                      <br />
                      www.yourmail@gmail.com
                    </p>
                  </div>
                  <div className="contact-addr-single">
                    <i className="fas fa-map-marker-alt" />
                    <p>
                      30 Green Tower, Street Name <br />
                      New York City, USA
                    </p>
                  </div>
                </div>
                <div className="contact-addr-social">
                  <h5 className="contact-tl-1">follow us</h5>
                  <ul className="contact-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-envelope" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact*/}
        {/* Start Google Map
		============================================= */}
        <div className="g-map-area">
          <div className="g-map--wrapper text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.133068555471!2d91.08454181482016!3d23.99107768447128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754051b50ebac3f%3A0x735c1cc426d8ebb!2sNatai%20Bodtoli%20Bazar%2C%20Natai%2C%2C%20Brahmanbaria!5e0!3m2!1sen!2sbd!4v1594548160557!5m2!1sen!2sbd" />
          </div>
        </div>
        {/* End Google Map*/}
      </div>
    </div>
  );
}
