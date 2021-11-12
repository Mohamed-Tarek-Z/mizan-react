import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
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
                    <Route path='/home' element={<Home />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} ext={this.state.ext} />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}
export default Main;