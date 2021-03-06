import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="footer-widget">
                            <h3>Contact Us</h3>
                            <ul className="footer-address">
                                <li>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h4>Address</h4>
                                        <p>3300 I-40 E Suite M2 <br />Amarillo, TX 79103</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-outbound-fill"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p> <a href="tel:+0123456789">+0123456789</a></p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p> <a href="tel:+0123456789">Support@eyecare.com</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <div className="footer-widget">
                            <h3>Services</h3>
                            <ul className="footer-menu">
                                <li> <a href="/home#about"> About </a> </li>
                                <li> <a href="/home#services"> Services </a> </li>
                                <li> <a href="/home#doctorsteam"> Our Doctots Team</a> </li>
                                <li> <a href="/blogs"> Our Blog Posts</a> </li>
                                <li> <a href="/home#contact">Contact</a> </li>
                                <li> <a href="/appointment">Appointment</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Working Hours</h3>
                            <ul className="footer-menu">
                                <li><p>MON  8:00 - 6:00</p></li>
                                <li><p>TUE  8:00 - 6:00</p></li>
                                <li><p>WED  8:00 - 6:00</p></li>
                                <li><p>THR  8:00 - 6:00</p></li>
                                <li><p>FRI  8:00 - 6:00</p></li>
                                <li><p>SAT - SUN CLOSED</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Newsletter</h3>
                            <form>
                                <input type="email" placeholder="Enter Email" className="form-control mb-2" autoComplete="off" />
                                <a href="" className="btn btn-outline-light btn-lg">Subscribe</a>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <div className="p-3">
                <p className="text-center mt-3">Powered by MTK 2021. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;