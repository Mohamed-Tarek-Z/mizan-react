import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, changeExt, fetchDishes, fetchComments, fetchPromos, fetchLeads, postFeedback } from '../redux/ActionCreators';
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
    postFeedback: (firstname, lastname, telNumber, email, agree, contactType, feedback) => dispatch(postFeedback(firstname, lastname, telNumber, email, agree, contactType, feedback)),
    changeExt: (ext) => dispatch(changeExt(ext)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeads: () => dispatch(fetchLeads()),
});


function Main(props) {
    let location = useLocation();
    useEffect(() => {
        props.fetchDishes();
        props.fetchComments();
        props.fetchPromos();
        props.fetchLeads();
    }, []);

    return (
        <div className="">
            <Header ext={props.ext} />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={300}>
                    <Routes>
                        <Route path="*" element={<Navigate replace to='home' />} />
                        <Route path='home' element={<Homepage dishes={props.dishes} leaders={props.leaders} promotions={props.promotions} ext={props.ext} changeimg={props.changeExt} />} />
                        <Route path='menu' element={<Menu dishes={props.dishes} ext={props.ext} changeimg={props.changeExt} />} />
                        <Route path='menu/:dishId' element={<DishWithId dishes={props.dishes} comments={props.comments} ext={props.ext} postComment={props.postComment} changeimg={props.changeExt} />} />
                        <Route path='contactus' element={<Contact postFeedback={props.postFeedback} />} />
                        <Route path='aboutus' element={<About leaders={props.leaders} ext={props.ext} />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
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