import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


let RenderDish = ({ dish, ext }) => {
    return (
        <div className="col-md-5 col-sm-12 m-1">
            <Card>
                <CardImg src={dish.image + ext} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

let RenderComments = ({ comments }) => {
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
            </div>

        );
    } else {
        return (
            <div className="col-md-5 col-sm-12 m-1">
                <h2>Comments</h2>
                <p>No Comments Yet</p>
            </div>
        );
    }
}

let DishDetail = ({ dish, ext }) => {
    if (dish != null) {

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish} ext={ext} />
                    <RenderComments comments={dish.comments} />
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