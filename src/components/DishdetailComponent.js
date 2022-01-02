import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Field } from 'react-final-form';
import { Loading } from './LoadingComponent';

const required = (value) => (value ? undefined : "Required");
const maxLength = (len) => (val) => (!(val) || (val.length <= len)) ? undefined : `Must be less than ${len} characters`;
const minLength = (len) => (val) => ((val) && (val.length >= len)) ? undefined : `Must be greater than ${len} characters`;

const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { error, touched } }) => (error && touched ? <span className="text-danger">{error}</span> : null)}
    </Field>
);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        this.toggleModal();
    }
    render() {
        return (
            <>
                <Button variant="outline-secondary" onClick={this.toggleModal} >
                    <span className='fa fa-comment'> Sumbit Comment</span>
                </Button>
                <Modal show={this.state.isModalOpen} onHide={() => this.toggleModal()}>
                    <Modal.Header closeButton>
                        Submit Comment
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            onSubmit={this.handleSubmit}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group my-2">
                                        <label>Rating</label>
                                        <div className="form-group">
                                            <Field className="form-control" name="rating" component="select">
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Your Name</label>
                                        <Field validate={composeValidators(required, minLength(3), maxLength(15))} className="form-control" name="author" component="input" type="text" placeholder="Your Name" />
                                        <Error name="author" />
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Comment</label>
                                        <Field className="form-control" name="comment" component="textarea" rows="6" placeholder="Leave a comment here" />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            )}
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

let RenderDish = ({ dish, ext, changeimg }) => {
    return (
        <div className="col-md-5 col-sm-12 m-1">
            <Card onClick={() => changeimg(ext)}>
                <Card.Img src={dish.image + ext} alt={dish.name} />
                <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

let RenderComments = ({ comments, addComment, dishId }) => {
    if (comments != null) {
        return (
            <div className="col-md-5 col-sm-12 m-1">
                <h2>Comments</h2>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    } else {
        return (
            <div className="col-md-5 col-sm-12 m-1">
                <h2>Comments</h2>
                <p>No Comments Yet</p>
                <CommentForm />
            </div>
        );
    }
}

let DishDetail = ({ dish, comments, ext, addComment, changeimg, dishesLoading, dishesErrMess }) => {
    if (dishesLoading)
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    else if (dishesErrMess)
        return (
            <div className="container">
                <div className="row">
                    <h4>{dishesErrMess}</h4>
                </div>
            </div>
        );
    else if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/menu">
                            Menu
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {dish.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3><hr />
                    </div>
                    <div className="row">
                        <RenderDish dish={dish} ext={ext} changeimg={changeimg} />
                        <RenderComments comments={comments} addComment={addComment} dishId={dish.id} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}


export default DishDetail;