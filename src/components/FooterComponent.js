import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="link-unstyled" to="/home">Home</Link></li>
                            <li><Link className="link-unstyled" to="/aboutus">About Us</Link></li>
                            <li><Link className="link-unstyled" to="/menu">Menu</Link></li>
                            <li><Link className="link-unstyled" to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            153, Mountan view<br />
                            Clear Water Bay, No Where<br />
                            Heap<br />
                            <i className="fa fa-phone fa-lg"></i>: 01151929374<br />
                            <i className="fa fa-fax fa-lg"></i>: 0444050916<br />
                            <i className="fa fa-envelope fa-lg"></i>: <Link className="link-unstyled" to="/">
                                Banned@Doom.com</Link>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <Link className="btn btn-social-icon btn-google" to="/"><i className="fa fa-google-plus"></i></Link>
                            <Link className="btn btn-social-icon btn-facebook" to="/"><i className="fa fa-facebook"></i></Link>
                            <Link className="btn btn-social-icon btn-linkedin" to="/"><i className="fa fa-linkedin"></i></Link>
                            <Link className="btn btn-social-icon btn-twitter" to="/"><i className="fa fa-twitter"></i></Link>
                            <Link className="btn btn-social-icon btn-google" to="/"><i className="fa fa-youtube"></i></Link>
                            <Link className="btn btn-social-icon" to="/"><i className="fa fa-envelope-o"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 xXiBannedXx</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;