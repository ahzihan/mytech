import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="big-footer container">
                    <div className="col-sm-12 col-md-6 col-lg-4 px-2">
                        <h6>ABOUT</h6>
                        <p>Our Web services will drive traffic to your site and help rank higher in search engines. Improve Your Website Traffic With Relevant First Page Ad & SEO Positions Today.</p>
                    </div>
                    <div className="category col-sm-12 col-md-6 col-lg-2 px-2">
                        <h6>CATEGORIES</h6>
                        <ul>
                            <li className=''>
                                <Link to="/">Digital Marketing</Link>
                            </li>
                            <li className=''>
                                <Link to="/">Graphics Design</Link>
                            </li>
                            <li className=''>
                                <Link to="/">SEO Optimization</Link>
                            </li>
                            <li className=''>
                                <Link to="/">Web Development</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="category col-sm-12 col-md-4 col-lg-2 px-2">
                        <h6>QUICK LINKS</h6>
                        <ul>
                            <li className=''>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className=''>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className=''>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className=''>
                                <Link to="/">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 px-2">
                        <h6>CONTACT US</h6>
                        <address>
                            <a href='#'>Email: info@mytech.com</a><br />
                            <a href='#'>Phone: 01518729991</a><br />
                            <a href='#'>House: 06, 1 no Road, Dhanmondi, Dhaka-1205.</a>

                        </address>
                    </div>
                </div>
                <div className="small-footer container">
                    <div className="col-sm-12 col-lg-6">
                        <p>MyTech @ 2022 Created By Md Akbar Hossain</p>
                    </div>
                    <div className="col-sm-12 col-lg-6"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;