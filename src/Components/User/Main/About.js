import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
  ============================================= */}
      <div className="site-breadcrumb-title" style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}>
        <h2>About Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area clearfix">
        {/* Start About
      ============================================= */}
        <div className="about-area de-padding">
          <div className="container">
            <div className="about-wrapper grid-2">
              <div className="about-left">
                <div className="about-left-img">
                  <img src="assets/img/about/image.png" alt="thumb" />
                  <Link to="#" className="about-play-btn">
                    <i className="fas fa-play" />
                  </Link>
                </div>
              </div>
              <div className="about-right">
                <div className="site-title">
                  <span className="hero-p1">About us</span>
                  <h2>
                    The Most Professional <span>Business Company</span>
                  </h2>
                </div>
                <p>
                  We work with the public sector to build thriving communities.
                  And we ork with regulators and financial institutions to build
                  trust and integrity in ets uis aliqua sunt nisi consectetur
                  anim.
                </p>
                <ul>
                  <li>
                    <img src="assets/img/about/about-icon-1.png" alt="thumb" />
                    <div className="about-right-info">
                      <h4>Business Solutions</h4>
                      <p>
                        Medixer Care will be administered through plan-based
                        omizable incorporate partnership between family.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src="assets/img/about/about-icon-2.png" alt="thumb" />
                    <div className="about-right-info">
                      <h4>24/7 Support</h4>
                      <p>
                        Medixer Care will be administered through plan-based
                        omizable incorporate partnership between family.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-more-btn">
                  <Link to="#" className="theme-btn">
                    More About Us
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About*/}
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
              <Link to="#" className="video-play-btn">
                <i className="fas fa-play" />
              </Link>
              <div className="vid-btn">
                <Link to="#" className="theme-btn">
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
        {/* Start Progress
      ============================================= */}
        <div className="progress-area de-padding">
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
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
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/02.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Warrison Samuel</h4>
                  <span>CEO &amp; Founder</span>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
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
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/03.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Harrison Samuel</h4>
                  <span>Support Membar</span>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
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
        {/* End Team*/}
        {/* Start Blog
      ============================================= */}
        <div className="blog-area de-padding">
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
                  <Link to="#" className="theme-btn">
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
                  <Link to="#" className="theme-btn">
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
                  <Link to="#" className="theme-btn">
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
                  <Link to="#" className="theme-btn">
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
                  <Link to="#" className="theme-btn">
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
                  <Link to="#" className="theme-btn">
                    More Details
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog*/}
      </div>
    </div>
  );
}
