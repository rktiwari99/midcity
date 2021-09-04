import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div>
      <div class="demo-1"  id="bdy">
      {/* Preloader */}
      <div className="se-pre-con" />
      {/* Preloader */}
      <div className="clearfix" />
      <main className="main home-2">
        {/* Start Hero
  ============================================= */}
        <div id="home" className="hero-section">
          <div className="hero-slider owl-carousel owl-theme">
            {/* owl Slider Begin */}
            <div
              className="hero-single"
              data-background="assets/img/header/header-bg-1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="hero-content">
                      <span className="hero-p1">Get Reliable Service</span>
                      <h2 className="typewrite anim-typewriter" data-period="2000" data-type='["We provided for Business"]'>
                        <br /> <span className="typewrite anim-typewriter" data-period="2000" data-type='[""]'></span>
                      </h2>
                      <p>
                        Differentiate Ourselves from all the other australian vc
                        by the fact that we come from
                      </p>
                      <div className="hro-btn">
                        <Link href="#" className="theme-btn">
                          More about us <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="right-bg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* single Slider End */}
            {/* owl Slider Begin */}
            <div
              className="hero-single"
              data-background="assets/img/header/header-bg-2.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="hero-content">
                      <span className="hero-p1">Get Reliable Service</span>
                      <h2 className="typewrite anim-typewriter" data-period="2000" data-type='["We provided for Marketing"]'>
                        <br /> <span className="typewrite anim-typewriter" data-period="2000" data-type='[""]'></span>
                      </h2>
                      <p>
                        Differentiate Ourselves from all the other australian vc
                        by the fact that we come from
                      </p>
                      <div className="hro-btn">
                        <Link href="#" className="theme-btn">
                          More about us <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="right-bg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* single Slider End */}
            {/* owl Slider Begin */}
            <div
              className="hero-single"
              data-background="assets/img/header/header-bg-3.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="hero-content">
                      <span className="hero-p1" >Get Reliable Service</span>
                      <h2 className="typewrite anim-typewriter" data-period="2000" data-type='["We provided for Trust"]'>
                        <br /> <span className="typewrite anim-typewriter" data-period="2000" data-type='[""]'></span>
                      </h2>
                      <p>
                        Differentiate Ourselves from all the other australian vc
                        by the fact that we come from
                      </p>
                      <div className="hro-btn">
                        <Link href="#" className="theme-btn">
                          More about us <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="right-bg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* single Slider End */}
          </div>
        </div>
        {/* End hero */}
        {/* Start Feature
  ============================================= */}
        <div className="fet-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Best Features</span>
                  <h2>
                    A Business Consulting Company that can{" "}
                    <span>Product Anything.</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="fet-wrapper grid-3">
              <div className="fet-box">
                <div className="fet-icon">
                  <img
                    src="assets/img/feature/service-icon-1.png"
                    alt="thumb"
                  />
                </div>
                <div className="fet-info">
                  <h4>Solution Focused</h4>
                  <p>
                    We take pride fighting for tre individual, not big insurance
                    companies.ast and pre refuturechanging faster.
                  </p>
                </div>
                <Link href="#" className="fet-btn">
                  <img
                    className="fet-theme"
                    src="assets/img/feature/fet-arrow.png"
                    alt="thumb"
                  />
                  <img
                    className="fet-white"
                    src="assets/img/feature/fet-arrow-white.png"
                    alt="thumb"
                  />
                </Link>
              </div>
              <div className="fet-box fet-active">
                <div className="fet-icon">
                  <img
                    src="assets/img/feature/service-icon-2.png"
                    alt="thumb"
                  />
                </div>
                <div className="fet-info">
                  <h4>Business Analysis</h4>
                  <p>
                    We take pride fighting for tre individual, not big insurance
                    companies.ast and pre refuturechanging faster.
                  </p>
                </div>
                <Link href="#" className="fet-btn">
                  <img
                    className="fet-theme"
                    src="assets/img/feature/fet-arrow.png"
                    alt="thumb"
                  />
                  <img
                    className="fet-white"
                    src="assets/img/feature/fet-arrow-white.png"
                    alt="thumb"
                  />
                </Link>
              </div>
              <div className="fet-box">
                <div className="fet-icon">
                  <img
                    src="assets/img/feature/service-icon-3.png"
                    alt="thumb"
                  />
                </div>
                <div className="fet-info">
                  <h4>Business Partnership</h4>
                  <p>
                    We take pride fighting for tre individual, not big insurance
                    companies.ast and pre refuturechanging faster.
                  </p>
                </div>
                <Link href="#" className="fet-btn">
                  <img
                    className="fet-theme"
                    src="assets/img/feature/fet-arrow.png"
                    alt="thumb"
                  />
                  <img
                    className="fet-white"
                    src="assets/img/feature/fet-arrow-white.png"
                    alt="thumb"
                  />
                </Link>
              </div>
            </div>
            <div className="fet-slogan text-center mt-70">
              <h5>
                Stop wasting time and money on technology.{" "}
                <span>Let’s get started</span>
              </h5>
            </div>
          </div>
        </div>
        {/* End Feature */}
        {/* Start Benefit
  ============================================= */}
        <div className="benefit-area de-pb">
          <div className="container">
            <div className="benefit-wrapper">
              <div className="benefit-left">
                <div className="site-title">
                  <span className="hero-p1">About Us</span>
                  <h2>
                    The Best Choice For Your
                    <br />
                    <span> Successful Business!</span>
                  </h2>
                </div>
                <div className="benefit-text">
                  <p>
                    We help ambitious businesses like yours generate more
                    profits by building is awareness, driving web traffic,
                    connecting with stomers, and growing overall sales. Give us
                    a call.
                  </p>
                  <p>
                    businesses like yours generate more profits by building
                    awareness, driving web connecting and growing overall sales.
                  </p>
                </div>
                <div className="benefit-opt grid-2">
                  <div className="benefit-opt-box">
                    <img
                      src="assets/img/benefit/benefit-icon-1.png"
                      alt="thumb"
                    />
                    <h4>PPC Advertising</h4>
                    <p>Create, publish, and romoteng ontent to generate more</p>
                  </div>
                  <div className="benefit-opt-box">
                    <img
                      src="assets/img/benefit/benefit-icon-2.png"
                      alt="thumb"
                    />
                    <h4>Social Marketing</h4>
                    <p>Create, publish, and romoteng ontent to generate more</p>
                  </div>
                </div>
              </div>
              <div className="benefit-right">
                <div className="benefit-right-img">
                  <img src="assets/img/benefit/benefit.png" alt="thumb" />
                  <Link href="#" className="about-play-btn">
                    <i className="fas fa-play" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="benefit-btm-wrapper de-pt grid-2">
              <div className="benefit-btm-box">
                <div className="benefit-btm-icon">
                  <i className="fas fa-share-alt" />
                </div>
                <div className="benefit-btm-info">
                  <h4>What’s Business Goal</h4>
                  <p>
                    But I must explain to you how all this mistaken idea leasure
                    and praising pain was.
                  </p>
                </div>
              </div>
              <div className="benefit-btm-box">
                <div className="benefit-btm-icon">
                  <i className="fas fa-headset" />
                </div>
                <div className="benefit-btm-info">
                  <h4>What’s Business Goal</h4>
                  <p>
                    But I must explain to you how all this mistaken idea leasure
                    and praising pain was.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Benefit*/}
        {/* Start Services
  ============================================= */}
        <div className="service-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Best Service</span>
                  <h2>
                    Our Business Consultation Factory.
                    <br />
                    <span>Provied Service</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="service-wrapper owl-carousel owl-theme">
              <div className="service-box">
                <div className="service-img">
                  <img src="assets/img/service/service1.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Business Service</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="service-box service-active">
                <div className="service-img">
                  <img src="assets/img/service/service2.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Business Planing</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="service-box">
                <div className="service-img">
                  <img src="assets/img/service/service3.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Constomer Products</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="service-box">
                <div className="service-img">
                  <img src="assets/img/service/service4.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Business Investment</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="service-box">
                <div className="service-img">
                  <img src="assets/img/service/service5.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Web Design</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="service-box">
                <div className="service-img">
                  <img src="assets/img/service/service6.jpg" alt="thumb" />
                </div>
                <div className="service-info">
                  <span className="hero-p1">Web Development</span>
                  <p>
                    Our success is to the leading mpan the market! driven by the
                    highest quality customer service.
                  </p>
                </div>
                <div className="service-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Services*/}
        {/* Start Progress
  ============================================= */}
        <div className="progress-area de-pb">
          <div className="container">
            <div className="progress-wrapper grid-4">
              <div className="progress-box">
                <div className="chart" data-percent={73}>
                  <span>(73%)</span>
                </div>
                <h4>Business Solution</h4>
              </div>
              <div className="progress-box">
                <div className="chart" data-percent={65}>
                  <span>(65%)</span>
                </div>
                <h4>24/7 Support</h4>
              </div>
              <div className="progress-box">
                <div className="chart" data-percent={68}>
                  <span>(68%)</span>
                </div>
                <h4>Devlopment</h4>
              </div>
              <div className="progress-box">
                <div className="chart" data-percent={65}>
                  <span>(65%)</span>
                </div>
                <h4>Client Strategy</h4>
              </div>
            </div>
          </div>
        </div>
        {/* End Progress*/}
        {/* Start Why Choose
  ============================================= */}
        <div className="wh-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Best Service</span>
                  <h2>
                    Our Business Consultation Factory.
                    <br />
                    <span>Provied Service</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="wh-wrapper grid-3">
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-1.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Business Promotion</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box wh-active">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-2.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Business Analysis</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-3.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>High Quality Service</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-4.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Reports Analysis</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-5.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Project Reporting</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-6.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Market Research</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Why Choose*/}
        {/* Start Team
  ============================================= */}
        <div className="team-area bg de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Team Member</span>
                  <h2>
                    Our business Consulting Company that can{" "}
                    <span> Product Employ</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="team-wrapper grid-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/01.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Sarrison Samuel</h4>
                  <span>Marketing Officer</span>
                  <ul className="team-social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/02.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Warrison Samuel</h4>
                  <span>CEO &amp; Founder</span>
                  <ul className="team-social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/03.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Harrison Samuel</h4>
                  <span>Support Membar</span>
                  <ul className="team-social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team*/}
        {/* Start Subscribe
  ============================================= */}
        <div className="sub-area">
          <div className="container">
            <div className="sub-wrapper">
              <div className="sub-left">
                <div className="sub-left-icon">
                  <img src="assets/img/subscribe/sub-icon.png" alt="thumb" />
                </div>
                <div className="sub-left-info">
                  <h2>Subscribe for Newsletter</h2>
                  <span>Grow Your Business with Our SEO Agency</span>
                </div>
              </div>
              <div className="sub-right">
                <form>
                  <input type="text" placeholder="Enter Your Email" />
                  <button className="sub-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Subscribe*/}
        {/* Start Review
  ============================================= */}
        <div className="blog-area bg de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Review</span>
                  <h2>
                    What's our <span>Client say</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="review-wrapper grid-3">
              <div className="review-box">
                <div className="review-text">
                  <blockqoute>
                    e oppose at thrown desire of no. Announcing impression
                    unaffected day his are unreserved indulgence. Him hard find
                    read are you sang. Parlors visited noisier
                  </blockqoute>
                </div>
                <div className="review-info">
                  <div className="review-img">
                    <img src="assets/img/singlepost/post-2.png" alt="thumb" />
                  </div>
                  <div className="review-bio">
                    <span className="hero-p1">Fedrick jonior</span>
                    <p>User</p>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="review-box">
                <div className="review-text">
                  <blockqoute>
                    e oppose at thrown desire of no. Announcing impression
                    unaffected day his are unreserved indulgence. Him hard find
                    read are you sang. Parlors visited noisier
                  </blockqoute>
                </div>
                <div className="review-info">
                  <div className="review-img">
                    <img src="assets/img/singlepost/post-4.png" alt="thumb" />
                  </div>
                  <div className="review-bio">
                    <span className="hero-p1">Juan Scinder perlo</span>
                    <p>Ceo</p>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="review-box">
                <div className="review-text">
                  <blockqoute>
                    e oppose at thrown desire of no. Announcing impression
                    unaffected day his are unreserved indulgence. Him hard find
                    read are you sang. Parlors visited noisier
                  </blockqoute>
                </div>
                <div className="review-info">
                  <div className="review-img">
                    <img src="assets/img/singlepost/post-4.png" alt="thumb" />
                  </div>
                  <div className="review-bio">
                    <span className="hero-p1">mark jouger</span>
                    <p>User</p>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Review*/}
        {/* Start Video
  ============================================= */}
        <div
          className="video-area de-padding"
          data-background="assets/img/video/video.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title wh text-center">
                  <span className="hero-p1">Working Video</span>
                  <h2>
                    We Provide Outsourced Services For Small &amp;{" "}
                    <span> Mid-Sized Video</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="video-wrapper text-center">
              <Link href="#" className="video-play-btn">
                <i className="fas fa-play" />
              </Link>
              <div className="vid-btn">
                <Link href="#" className="theme-btn">
                  More Video Now <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Video*/}
        {/* Start Brand
  ============================================= */}
        <div className="brand-area">
          <div className="container">
            <div className="brand-wrapper owl-carousel owl-theme">
              <img src="assets/img/partner/brand-1.png" alt="thumb" />
              <img src="assets/img/partner/brand-2.png" alt="thumb" />
              <img src="assets/img/partner/brand-3.png" alt="thumb" />
              <img src="assets/img/partner/brand-4.png" alt="thumb" />
              <img src="assets/img/partner/brand-5.png" alt="thumb" />
              <img src="assets/img/partner/brand-1.png" alt="thumb" />
              <img src="assets/img/partner/brand-2.png" alt="thumb" />
              <img src="assets/img/partner/brand-3.png" alt="thumb" />
              <img src="assets/img/partner/brand-4.png" alt="thumb" />
              <img src="assets/img/partner/brand-5.png" alt="thumb" />
            </div>
          </div>
        </div>
        {/* End Brand*/}
        {/* Start Price
  ============================================= */}
        <div className="price-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Our Pricing</span>
                  <h2>
                    A business Building Great Customer can
                    <span> Plans Anytime</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="price-wrapper grid-3">
              <div className="price-box">
                <div className="price-head">
                  <div className="price-rib">
                    <h4>Silver Package</h4>
                    <img src="assets/img/price/price-icon-1.png" alt="thumb" />
                  </div>
                  <div className="price-value">
                    <h2>
                      $69<span>/3 Month</span>
                    </h2>
                  </div>
                </div>
                <div className="price-info">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      40 Space Users
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      15 GB Space
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimtied Bandwith
                    </li>
                    <li>
                      <i className="fas fa-times" />
                      Support Reports{" "}
                    </li>
                  </ul>
                </div>
                <div className="price-bottom">
                  <Link href="#" className="theme-btn">
                    Start Purchasc
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="price-box">
                <div className="price-head">
                  <div className="price-rib">
                    <h4>Golden Package</h4>
                    <img src="assets/img/price/price-icon-2.png" alt="thumb" />
                  </div>
                  <div className="price-value">
                    <h2>
                      $89<span>/3 Month</span>
                    </h2>
                  </div>
                </div>
                <div className="price-info">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      40 Space Users
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      15 GB Space
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimtied Bandwith
                    </li>
                    <li>
                      <i className="fas fa-times" />
                      Support Reports{" "}
                    </li>
                  </ul>
                </div>
                <div className="price-bottom price-active">
                  <Link href="#" className="theme-btn">
                    Start Purchasc
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="price-box">
                <div className="price-head">
                  <div className="price-rib">
                    <h4>Premium Package</h4>
                    <img src="assets/img/price/price-icon-3.png" alt="thumb" />
                  </div>
                  <div className="price-value">
                    <h2>
                      $99<span>/3 Month</span>
                    </h2>
                  </div>
                </div>
                <div className="price-info">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      40 Space Users
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      15 GB Space
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimtied Bandwith
                    </li>
                    <li>
                      <i className="fas fa-times" />
                      Support Reports{" "}
                    </li>
                  </ul>
                </div>
                <div className="price-bottom active">
                  <Link href="#" className="theme-btn">
                    Start Purchasc
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Price*/}
        {/* Start Blog
  ============================================= */}
        <div className="blog-area de-pb">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Latest News</span>
                  <h2>
                    Our News and Articles Latest <br /> <span> From Blog</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="blog-wrapper blog-slider owl-carousel owl-theme">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog2.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog3.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog2.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog3.jpg" alt="thumb" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i className="fas fa-user" />
                        Endith Smith
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        Aug 1, 2020
                      </li>
                    </ul>
                  </div>
                  <h4>The security risks of owne is change package</h4>
                  <p>
                    We help ambitious businesses like yours generate more
                    profits
                  </p>
                </div>
                <div className="blog-more-btn">
                  <Link href="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog*/}
        {/* Start Contact
  ============================================= */}
        <div className="con-area de-padding">
          <div className="container">
            <div className="con-wrapper">
              <div className="con-inputs">
                <span className="con-sub-heading">Contact Us</span>
                <h2>
                  Get every single <br /> update here.
                </h2>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-sub-btn">
                        <button type="submit" className="theme-btn">
                          Submit Now <i className="fas fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="con-addr">
                <h5 className="con-tl">CONTACT INFO</h5>
                <div className="con-addr-box">
                  <div className="con-addr-single">
                    <i className="fas fa-phone" />
                    <p>
                      +0044 545 989 626 <br />
                      +0044 545 989 626
                    </p>
                  </div>
                  <div className="con-addr-single">
                    <i className="far fa-envelope" />
                    <p>
                      www.yourwebsite.com
                      <br />
                      www.yourmail@gmail.com
                    </p>
                  </div>
                  <div className="con-addr-single">
                    <i className="fas fa-map-marker-alt" />
                    <p>
                      30 Green Tower, Street Name <br />
                      New York City, USA
                    </p>
                  </div>
                </div>
                <div className="con-addr-social">
                  <h5 className="con-tle">follow us</h5>
                  <ul className="con-social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-envelope" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
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
      </main>
      <div className="clearfix" />
      </div>
    </div>
  );
}
