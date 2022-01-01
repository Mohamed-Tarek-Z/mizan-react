import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, changeExt } from '../redux/ActionCreators';

let mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
        ext: state.ext
    }
};

let mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    changeExt: (ext) => dispatch(changeExt(ext))
});

class Main extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <Routes>
                    <Route path="*" element={<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} leader={this.props.leaders.filter((leader) => leader.featured)[0]} promo={this.props.promotions.filter((promo) => promo.featured)[0]} ext={this.props.ext} />} />
                    <Route path='home' element={<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} leader={this.props.leaders.filter((leader) => leader.featured)[0]} promo={this.props.promotions.filter((promo) => promo.featured)[0]} ext={this.props.ext} />} />
                    <Route path='menu' element={<Menu dishes={this.props.dishes} ext={this.props.ext} changeimg={this.props.changeExt} />} />
                    <Route path='menu/:dishId' element={<DishWithId dishes={this.props.dishes} comments={this.props.comments} ext={this.props.ext} addComment={this.props.addComment} changeimg={this.props.changeExt} />} />
                    <Route path='contactus' element={<Contact />} />
                    <Route path='aboutus' element={<About leaderss={this.props.leaders} ext={this.props.ext} />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

const DishWithId = ({ dishes, comments, ext, addComment, changeimg }) => {
    let D_Id = parseInt(useParams().dishId, 10);
    let dish = dishes.filter((dish) => dish.id === D_Id)[0];
    let dcomments = comments.filter((comment) => comment.dishId === D_Id);
    return (
        <DishDetail dish={dish} comments={dcomments} ext={ext} addComment={addComment} changeimg={changeimg} />
    );
};

let withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));