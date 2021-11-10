import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        if (this.state.ext === 'jpg') {
            this.setState({ ext: 'jpg' });
        } else {
            this.setState({ ext: 'png' });
        }
    }

    render() {
        return (
            <div className="">
                <Header/>
                <Menu dishes={this.state.dishes} ext={this.state.ext} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} ext={this.state.ext} />
                <Footer/>
            </div>
        );
    }
}
export default Main;