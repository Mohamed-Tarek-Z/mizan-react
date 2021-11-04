import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            ext: 'png'
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        if (this.state.ext === 'jpg') {
            this.setState({ ext: 'jpg' });
        } else {
            this.setState({ ext: 'png' });
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg src={dish.image + this.state.ext} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        let menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image + this.state.ext} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;