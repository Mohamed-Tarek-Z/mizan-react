import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import { Jumbotron } from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNavOpen = this.toggleNavOpen.bind(this);
    }
    toggleNavOpen() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <div className='container'>
                        <Navbar.Brand className='mr-auto' href="/"><img src='assets/images/logo.png' height='30' width='41' alt='الصفا و المروة للغزل' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav navbar>
                                <Nav.Item>
                                    <Link className='nav-link' to='home'>
                                        <span className='fa fa-home fa-lg'> Home </span>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='aboutus'>
                                        <span className='fa fa-info fa-lg'> About Us </span>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='menu'>
                                        <span className='fa fa-list fa-lg'> Menu </span>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='contactus'>
                                        <span className='fa fa-address-card fa-lg'> Contact Us </span>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse >
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-md-12 col-sm-6'>
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