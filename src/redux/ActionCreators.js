import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes').then(response => response.json()).then(dishes => dispatch(addDishes(dishes)));
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


export let fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments').then(response => response.json()).then(comments => dispatch(addComments(comments)));
}

export let commentsFailed = (errmessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmessage
});

export let addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export let fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions').then(response => response.json()).then(promos => dispatch(addPromos(promos)));
}

export let promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export let promosFailed = (errmessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmessage
});

export let addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export let fetchLeads = () => (dispatch) => {
    dispatch(leadsLoading(true));

    return fetch(baseUrl + 'leaders').then(response => response.json()).then(leads => dispatch(addLeads(leads)));
}

export let leadsLoading = () => ({
    type: ActionTypes.LEADS_LOADING
});

export let leadsFailed = (errmessage) => ({
    type: ActionTypes.LEADS_FAILED,
    payload: errmessage
});

export let addLeads = (Leads) => ({
    type: ActionTypes.ADD_LEADS,
    payload: Leads
});