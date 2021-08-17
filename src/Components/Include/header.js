import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="main-navigation">
                <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent bsnav-scrollspy">
                    <div className="header-top-area home-2">
                    <div className="header-top-wrapper">
                        <div className="header-top-left">
                        <ul>
                            <li><i className="far fa-clock" />Mon-Fri:9:00am-06-00pm/closed 0n weekends</li>
                            <li><i className="far fa-envelope-open" />demo@support.com</li>
                            <li><i className="flaticon-call" />(+123) 456-9989</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <Link className="navbar-brand" to="/midcity">
                        <img src="assets/img/logo/logo.png" className="logo-display" alt="thumb" />
                        <img src="assets/img/logo/logo.png" className="logo-scrolled" alt="thumb" />
                    </Link>
                    <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse justify-content-sm-end">
                        <ul className="navbar-nav navbar-mobile ml-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/midcity">Home <i className="caret ti-angle-down" /></Link>
                            <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="#">home varsion 1</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">home varsion 2</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">home varsion 3</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">home OnePage</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/midcity/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/midcity/service">Service</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/midcity/project">Project <i className="caret ti-angle-down" /></Link>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/midcity/projectdetails">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/midcity/team">Team</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/midcity/blog">Blog <i className="caret ti-angle-down" /></Link>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/midcity/blogdetails">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/midcity/contact">Contact</Link></li>
                        </ul>
                        <div className="header-serarch-btn">
                        <i className="fas fa-search" />
                        <Link to="#" className="header-btn">Free consultant <i className="fas fa-arrow-right" /></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bsnav-mobile">
                    <div className="bsnav-mobile-overlay" />
                    <div className="navbar" />
                </div>
                </div>
            </div>
        </header>

    )
}
