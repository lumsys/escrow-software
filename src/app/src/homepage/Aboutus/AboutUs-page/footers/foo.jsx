import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import {BsArrowUpCircle, BsFacebook,BsInstagram } from "react-icons/bs";
import tazapayImg from '../img/tazapay-img.png';


function foo () {
    return(
        <div>
        {/* <!-- Footer section --> */}
        <footer className="p-5 bg-light">
            <div className="container">
                <div className="cursor-pointer">
                    <a href="jj" className="nuxt-link-active" style={{color: "#0f4c68;"}}>
                        <img src={tazapayImg} alt="" className="mt-0"/>
                    </a> 
                </div>
                <div className="pl-5 pt-5"></div>
                <div className="row row-cols-2 row-cols-lg-4">
                    <div className="col">
                    <p className="lead"><strong>Payments</strong></p> 
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item "><a href="jj" className="nav-link">Payments Links</a></li>
                    </ul>
                    </div>
                    <div className="col">
                        <p className="lead"><strong>Escrow</strong></p> 
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item "><a href="jj" className="nav-link">Escrow for exports & imports</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Escrow for service</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Marketplace & Platforms</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Why Tazapay</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <p className="lead"><strong>Resources</strong> </p>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item "><a href="jj" className="nav-link">Resource center</a></li>
                        <li className="nav-item "><a href="jj" className="nav-link">Blog</a></li>
                        <li className="nav-item "><a href="jj" className="nav-link">Guides</a></li>
                        <li className="nav-item "><a href="jj" className="nav-link">Trade Process</a></li>
                    </ul> 
                    </div>
                    <div className="col">
                        <p className="lead"><strong>About us</strong></p>  
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item "><a href="jj" className="nav-link">Team</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Reviews and Testimonials</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">News & Media</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">Contact Us</a></li>
                            <li className="nav-item "><a href="jj" className="nav-link">FAQ</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        
        </footer>
        {/* <!--copyright footer section  --> */}
        <hr/>
        <div className="px-5 bg-white text-center position-relative">
            <div className="container">
                <p className="lead"> &copy; 2020 Tazapay. All reserved. <span className="me-2">Privacy Policy</span> <span>Terms and of service</span>
                    <a href="jj" className="position-absolute  me-1 px-5">
                        <BsFacebook/>
                        <span className="">
                            <a href="jj" className="px-5">
                                <BsInstagram/>
                            </a>
                        </span>
                    </a>

                </p>
                
                <a href="#" className="position-absolute text-dark bottom-0 end-0 px-5">
                    <BsArrowUpCircle />
                </a>
            </div>
        </div>
        </div>
    );
}

export default foo;