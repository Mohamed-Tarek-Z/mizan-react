import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

let RenderMenuItem = ({ dish, ext, onClick }) => {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image + ext} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

let Menu = (props) => {
    let menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-md-5 col-sm-12 m-1">
                <RenderMenuItem dish={dish} ext={props.ext} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;