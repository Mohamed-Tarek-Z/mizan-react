import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">الصفا و المروة للغزل</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-md-12 col-sm-6">
                                <h1>الصفا و المروة للغزل</h1>
                                <p>تعالى أتعلم مننا علشان مفيش زينا</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;