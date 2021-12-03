import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, useParams } from 'react-router-dom';

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
        this.onDishSelect = this.onDishSelect.bind(this);
    }

    onDishSelect(ext) {
        if (ext === 'jpg') {
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
                    <Route path="*" element={<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]} promo={this.state.promotions.filter((promo) => promo.featured)[0]} ext={this.state.ext} />} />

                    <Route path='home' element={<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]} promo={this.state.promotions.filter((promo) => promo.featured)[0]} ext={this.state.ext} />} />

                    <Route path='menu' element={<Menu dishes={this.state.dishes} ext={this.state.ext} onClick={this.onDishSelect} />} >
                    </Route>
                        <Route path='menu/:dishId' element={<DishWithId dishes={this.state.dishes} comments={this.state.comments} ext={this.state.ext} />} />


                    <Route path='contactus' element={<Contact />} />

                </Routes>
                <Footer />
            </div>
        );
    }
}

const DishWithId = ({ dishes, comments, ext }) => {
    let D_Id = parseInt(useParams().dishId, 10);
    let dish = dishes.filter((dish) => dish.id === D_Id)[0];
    let dcomments = comments.filter((comment) => comment.dishId === D_Id);
    return (
        <DishDetail dish={dish} comments={dcomments} ext={ext} />
    );
};


export default Main;