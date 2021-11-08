import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
   
    render() {
        if (this.props.dish != null) {
            let commnets = this.props.dish.comments.map((coment) => {
                return (
                    <li key={coment.id}>
                        <p>{coment.comment}</p>
                        <p>--{coment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(coment.date)))}</p>
                    </li>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 m-1">
                            <Card>
                                <CardImg src={this.props.dish.image + this.props.ext} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5 col-sm-12 m-1">
                            <h2>Comments</h2>
                            <ul className="list-unstyled">
                                {commnets}
                            </ul>
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
}

export default DishDetail;