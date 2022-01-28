import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Favorites from './FavoriteComponent';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, changeExt, fetchDishes, fetchComments, fetchPromos, fetchLeads, postFeedback, loginUser, logoutUser, fetchFavorites, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
        ext: state.ext,
        favorites: state.favorites,
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
    postFeedback: (firstname, lastname, telNumber, email, agree, contactType, feedback) => dispatch(postFeedback(firstname, lastname, telNumber, email, agree, contactType, feedback)),
    changeExt: (ext) => dispatch(changeExt(ext)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeads: () => dispatch(fetchLeads()),
    fetchFavorites: () => dispatch(fetchFavorites()),
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser())
});

function Main(props) {
    let location = useLocation();
    useEffect(() => {
        props.fetchDishes();
        props.fetchComments();
        props.fetchPromos();
        props.fetchLeads();
        props.fetchFavorites();
    }, []);

    return (
        <div className="">
            <Header auth={props.auth} loginUser={props.loginUser} logoutUser={props.logoutUser} ext={props.ext} />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={300}>
                    <Routes>
                        <Route path="*" element={<Navigate replace to='home' />} />
                        <Route path='home' element={<Homepage dishes={props.dishes} leaders={props.leaders} promotions={props.promotions} ext={props.ext} changeimg={props.changeExt} />} />
                        <Route path='menu' element={<Menu dishes={props.dishes} ext={props.ext} changeimg={props.changeExt} />} />
                        <Route path='menu/:dishId' element={<DishWithId dishes={props.dishes} comments={props.comments} ext={props.ext} postComment={props.postComment} changeimg={props.changeExt} auth={props.auth} favorites={props.favorites} postFavorite={props.postFavorite} />} />
                        <Route path='contactus' element={<Contact postFeedback={props.postFeedback} />} />
                        <Route path='aboutus' element={<About leaders={props.leaders} ext={props.ext} />} />
                        <Route path='favorites' element={props.auth.isAuthenticated ? <Favorites favorites={props.favorites} deleteFavorite={props.deleteFavorite} ext={props.ext} /> : <Navigate replace to='home' />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

let DishWithId = ({ dishes, comments, auth, favorites, postFavorite, ext, postComment, changeimg }) => {
    let D_Id = parseInt(useParams().dishId, 10);
    let dish = dishes.dishes.filter((dish) => dish.id === D_Id)[0];
    let dcomments = comments.comments.filter((comment) => comment.dishId === D_Id);
    return (
        <DishDetail dish={dish} comments={dcomments} ext={ext} logedin={auth.isAuthenticated} isFavorite={(auth.isAuthenticated && favorites.favorites != null) ? favorites.favorites.dishes.some((dish) => dish._id === D_Id) : false} postFavorite={postFavorite} postComment={postComment} changeimg={changeimg} dishesLoading={dishes.isLoading} dishesErrMess={dishes.errMessage} commentsErrMess={comments.errMessage} />
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