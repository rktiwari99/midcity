import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-widget">
                <div className="container">
                    <div className="footer-widget-wrapper de-padding">
                        <div className="footer-widget-box ab-us">
                            <div><img src="assets/img/logo/white-logo.png" alt="thumb" /></div>
                            <p>
                                Our Approach to <span>SEO</span> is unique around what we know work as we know does with is verified factor in play.
                            </p>
                            <a href="#" className="footer-dis">Discover More <i className="ti-arrow-right"></i></a>
                        </div>
                        
                        <div className="footer-widget-box">
                            <h5 className="foo-widget-title">Services</h5>
                            <ul className="foo-list">
                                <li><a href="#"><span>SEO</span> Small Business</a></li>
                                <li><a href="#">Enterprise <span>SEO</span></a></li>
                                <li><a href="#"><span>SEO</span> local Servies</a></li>
                                <li><a href="#">National <span>SEO</span></a></li>
                                <li><a href="#">International <span>SEO</span></a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-widget-box footer-contact">
                            <h5 className="foo-widget-title">Contact Us</h5>
                            <p>
                                If you have any questions or need help feel free to contact with our team.
                            </p>
                            <ul className="foo-list">
                                <li><i className="flaticon-call"></i>(+990) 885-69569</li>
                                <li><i className="ti-location-pin"></i>1256 city,New York</li>
                            </ul>
                        </div>
                        
                        <div className="footer-widget-box">
                            <h5 className="foo-widget-title">Company</h5>
                            <ul className="foo-list">
                                <li><a href="#">Our Product</a></li>
                                <li><a href="#">Doucumentation</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">What we do?</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2020. All Rights Reserved.</p>
                        <ul className="footer-social">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>	
    )
}
