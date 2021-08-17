import React from 'react'
import { Link } from "react-router-dom";

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
                            <Link to="#" className="footer-dis">Discover More <i className="ti-arrow-right"></i></Link>
                        </div>
                        
                        <div className="footer-widget-box">
                            <h5 className="foo-widget-title">Services</h5>
                            <ul className="foo-list">
                                <li><Link to="#"><span>SEO</span> Small Business</Link></li>
                                <li><Link to="#">Enterprise <span>SEO</span></Link></li>
                                <li><Link to="#"><span>SEO</span> local Servies</Link></li>
                                <li><Link to="#">National <span>SEO</span></Link></li>
                                <li><Link to="#">International <span>SEO</span></Link></li>
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
                                <li><Link to="#">Our Product</Link></li>
                                <li><Link to="#">Doucumentation</Link></li>
                                <li><Link to="#">Our Services</Link></li>
                                <li><Link to="#">Company</Link></li>
                                <li><Link to="#">What we do?</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2020. All Rights Reserved.</p>
                        <ul className="footer-social">
                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>	
    )
}
