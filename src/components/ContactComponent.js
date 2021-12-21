import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/breadcrumb';
import { Form, Field } from 'react-final-form';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">
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
                        <Form
                            onSubmit={this.handleSubmit}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group my-2">
                                        <label>First Name</label>
                                        <Field className="form-control" name="firstname" component="input" type="text" placeholder="First Name" />
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Last Name</label>
                                        <Field className="form-control" name="lastname" component="input" type="text" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Contact Tel.</label>
                                        <Field className="form-control" name="telnum" component="input" type="tel" placeholder="Tel. Number" />
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Email</label>
                                        <Field className="form-control" name="email" component="input" type="text" placeholder="Email" />
                                    </div>
                                    <div className="row align-items-center mb-2">
                                        <div className="form-check col">
                                            <label className="form-check-label">May we Contact you?</label>
                                            <Field className="form-check-input" name="agree" component="input" type="checkbox" />
                                        </div>
                                        <div className="form-group col">
                                            <Field className="form-control" name="contactType" component="select">
                                                <option value='Tel.'>Tel.</option>
                                                <option value='Email'>Email</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="form-group my-2">
                                        <label>FeedBack</label>
                                        <Field className="form-control" name="message" component="textarea" placeholder="Leave a comment here" />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;