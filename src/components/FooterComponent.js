import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a className="link-unstyled" href="http://hanime.tv/">Home</a></li>
                            <li><a className="link-unstyled" href="http://hanime.tv/">About</a></li>
                            <li><a className="link-unstyled" href="http://hanime.tv/">Menu</a></li>
                            <li><a className="link-unstyled" href="http://hanime.tv/">Contact</a></li>
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
                            <i className="fa fa-envelope fa-lg"></i>: <a href="http://hanime.tv/">
                                Banned@Doom.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://hanime.tv/"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://hanime.tv/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://hanime.tv/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://hanime.tv/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://hanime.tv/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="http://hanime.tv/"><i className="fa fa-envelope-o"></i></a>
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