import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    render() {
        let menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-md-5 col-sm-12 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image + this.props.ext} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;