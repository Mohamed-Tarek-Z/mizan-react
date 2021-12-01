import React from 'react';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useParams } from 'react-router-dom';


let RenderDish = ({ dish, ext }) => {
    return (
        <div className="col-md-5 col-sm-12 m-1">
            <Card>
                <Card.Img src={dish.image + ext} alt={dish.name} />
                <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
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

let DishDetail = ({ dishes, comments, ext }) => {
    let params = useParams();
    if (dishes != null) {
        let D_Id = parseInt(params.dishId, 10);
        let dish = dishes.filter((dish) => dish.id === D_Id)[0];
        let dcomments = comments.filter((comment) => comment.dishId === D_Id);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/menu'>Menu</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {dish.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3><hr />
                    </div>
                    <div className="row">
                        <RenderDish dish={dish} ext={ext} />
                        <RenderComments comments={dcomments} />
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