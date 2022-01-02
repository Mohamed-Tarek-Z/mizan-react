import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


export let addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export let fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export let dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export let dishesFailed = (errmessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmessage
});

export let addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export let changeExt = (ext) => ({
    type: ActionTypes.CHANGE_EXT,
    payload: {
        ext: ext
    }
});