import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


let Menu = ({dishes, ext, onClick}) => {
    return (
        <div className="container">
            <div className="row">
                {dishes.map((dish) => {
                    return (
                        <div key={dish.id} className="col-md-5 col-sm-12 m-4">
                            <Card onClick={() => onClick(dish.id)}>
                                <CardImg width="100%" src={dish.image + ext} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;