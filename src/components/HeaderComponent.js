import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username = " + this.username.value + " Password = " + this.password.value + " remember = " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <div className='container'>
                        <Navbar.Brand className='mr-auto' as={'div'}><Link to='/home'><img src={baseUrl + 'images/logo.' + this.props.ext} height='30' width='41' alt='الصفا و المروة للغزل' /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="me-auto" >
                                <Nav.Link as='div'>
                                    <Link className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'> Home </span>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link as='div'>
                                    <Link className='nav-link' to='/menu'>
                                        <span className='fa fa-list fa-lg'> Menu </span>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link as='div'>
                                    <Link className='nav-link' to='/aboutus'>
                                        <span className='fa fa-info fa-lg'> About Us </span>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link as='div'>
                                    <Link className='nav-link' to='/contactus'>
                                        <span className='fa fa-address-card fa-lg'> Contact Us </span>
                                    </Link>
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Item>
                                    <Button variant="primary" onClick={this.toggleModal} >
                                        <span className='fa fa-sign-in fa-lg'> Login</span>
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <>
                    <div className='jumbotron'>
                        <div className='row row-header'>
                            <div className='col-md-12 col-sm-6'>
                                <h1>الصفا و المروة للغزل</h1>
                                <p className='lead'>تعالى أتعلم مننا علشان مفيش زينا</p>
                            </div>
                        </div>
                    </div>
                </>
                <Modal show={this.state.isModalOpen} onHide={() => this.toggleModal()}>
                    <Modal.Header closeButton>
                        LogIn
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Group controlId='username'>
                                <Form.Label>
                                    UserName
                                </Form.Label>
                                <Form.Control ref={(input) => this.username = input} className="col-md-7" type="text" placeholder="User Name" required />
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control ref={(input) => this.password = input} className="col-md-7" type="password" placeholder="password" required />
                            </Form.Group>
                            <Form.Group controlId='remember'>
                                <Form.Check ref={(input) => this.remember = input} type='checkbox' label='Remember Me?' />
                            </Form.Group>
                            <Form.Group controlId='login'>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Header;