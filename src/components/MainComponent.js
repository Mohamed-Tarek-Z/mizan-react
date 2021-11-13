import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
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
                <Header />
                <Routes>
                    <Route path='/home' element={<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]} promo={this.state.promotions.filter((promo) => promo.featured)[0]} ext={this.state.ext} />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} ext={this.state.ext} />} />
                    <Route path='/contactus' element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}
export default Main;