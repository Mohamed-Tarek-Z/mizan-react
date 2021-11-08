import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null,
            ext: 'png'
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
        if (this.state.ext === 'png') {
            this.setState({ ext: 'jpg' });
        } else {
            this.setState({ ext: 'png' });
        }
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">الصفا و المروة للغزل</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} ext={this.state.ext} onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} ext={this.state.ext} />
                </div>
            </div>
        );
    }
}
export default Main;