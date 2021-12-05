import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/breadcrumb';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched, [field]: true
            }
        });
    }

    validate(firstname, lastname, telnum, email) {
        let errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First name must be greater than 3 chars';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First name must be less than 10 chars';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last name must be greater than 3 chars';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last name must be less than 10 chars';

        if (this.state.touched.telnum && !/^\d+$/.test(telnum))
            errors.telnum = 'Tel num must be numbers only';

        if (this.state.touched.email && !/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(email))
            errors.email = 'Email must be an email address';

        return errors;
    }

    handleSubmit(event) {
        console.log('a7a: ' + JSON.stringify(this.state));
        alert('a7a: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        let errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Contact Us
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3><hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="https://animeidhentai.com/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-11 offset-1">
                        <h3>Send FeedBack</h3>
                    </div>
                    <div className="col-10 col-md-9 offset-2">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" as={Row} controlId='firstname'>
                                <Col md={2}>
                                    <Form.Label>
                                        First Name
                                    </Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control isValid={this.state.touched.firstname && errors.firstname === ''} isInvalid={this.state.touched.firstname && errors.firstname !== ''} onBlur={this.handleBlur('firstname')} name='firstname' className="col-md-7" type="text" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstname}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Row} controlId='lastname'>
                                <Col md={2}>
                                    <Form.Label>
                                        Last Name
                                    </Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control isValid={this.state.touched.lastname && errors.lastname === ''} isInvalid={this.state.touched.lastname && errors.lastname !== ''} onBlur={this.handleBlur('lastname')} name='lastname' className="col-md-7" type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastname}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Row} controlId='telnum'>
                                <Col md={2}>
                                    <Form.Label>
                                        Contact Tel.
                                    </Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control isValid={this.state.touched.telnum && errors.telnum === ''} isInvalid={this.state.touched.telnum && errors.telnum !== ''} onBlur={this.handleBlur('telnum')} name='telnum' className="col-md-7" type="tel" placeholder="Tel. Number" value={this.state.telnum} onChange={this.handleInputChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.telnum}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Row} controlId='email'>
                                <Col md={2}>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control isValid={this.state.touched.email && errors.email === ''} isInvalid={this.state.touched.email && errors.email !== ''} onBlur={this.handleBlur('email')} name='email' className="col-md-7" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Row}>
                                <Col md={{ size: 3, offset: 2 }}>
                                    <Form.Group>
                                        <Form.Check name='agree' type='checkbox' label='May we Contact you?' checked={this.state.agree} onChange={this.handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={{ size: 2 }}>
                                    <Form.Select name='contactType' value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option value='Tel.'>Tel.</option>
                                        <option value='Email'>Email</option>
                                    </Form.Select>
                                </Col>
                                <Col md={3}></Col>
                            </Form.Group>

                            <Form.Group className="mb-3" as={Row} controlId='feedback'>
                                <Col md={2}>
                                    <Form.Label>
                                        FeedBack
                                    </Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control name='message' as="textarea" placeholder="Leave a comment here" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row} controlId='Submit'>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;