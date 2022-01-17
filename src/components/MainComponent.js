import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, changeExt, fetchDishes, fetchComments, fetchPromos, fetchLeads } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
        ext: state.ext
    }
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    changeExt: (ext) => dispatch(changeExt(ext)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeads: () => dispatch(fetchLeads()),
});


class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeads();
    }

    render() {
        return (
            <div className="">
                <Header ext={this.props.ext} />
                <TransitionGroup>
                    <CSSTransition key={<LocationKey/>} classNames="page" timeout={300}>
                        <Routes>
                            <Route path="*" element={<Navigate replace to='home' />} />

                            <Route path='home' element={<Homepage dishes={this.props.dishes} leaders={this.props.leaders} promotions={this.props.promotions} ext={this.props.ext} changeimg={this.props.changeExt} />} />

                            <Route path='menu' element={<Menu dishes={this.props.dishes} ext={this.props.ext} changeimg={this.props.changeExt} />} />

                            <Route path='menu/:dishId' element={<DishWithId dishes={this.props.dishes} comments={this.props.comments} ext={this.props.ext} postComment={this.props.postComment} changeimg={this.props.changeExt} />} />

                            <Route path='contactus' element={<Contact />} />

                            <Route path='aboutus' element={<About leaders={this.props.leaders} ext={this.props.ext} />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

let LocationKey = () => {
    const location = useLocation();
    return (<>{location.key}</>);
}

let DishWithId = ({ dishes, comments, ext, postComment, changeimg }) => {
    let D_Id = parseInt(useParams().dishId, 10);
    let dish = dishes.dishes.filter((dish) => dish.id === D_Id)[0];
    let dcomments = comments.comments.filter((comment) => comment.dishId === D_Id);
    return (
        <DishDetail dish={dish} comments={dcomments} ext={ext} postComment={postComment} changeimg={changeimg} dishesLoading={dishes.isLoading} dishesErrMess={dishes.errMessage} commentsErrMess={comments.errMessage} />
    );
}

let Homepage = ({ dishes, leaders, promotions, ext, changeimg }) => {
    return (
        <Home dish={dishes.dishes.filter((dish) => dish.featured)[0]} dishesLoading={dishes.isLoading} dishesErrMess={dishes.errMessage} leader={leaders.leaders.filter((leader) => leader.featured)[0]} leadersLoading={leaders.isLoading} leadersErrMess={leaders.errMessage} promo={promotions.promotions.filter((promo) => promo.featured)[0]} promotionsLoading={promotions.isLoading} promotionsErrMess={promotions.errMessage} ext={ext} changeimg={changeimg} />
    );
}

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