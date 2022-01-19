import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export let addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export let postComment = (dishId, rating, author, comment) => (dispatch) => {
    let newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('Post comments ', error.message); alert('the comment could not be posted/nError: ' + error.message); });

}
export let addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export let postFeedback = (firstname, lastname, telNumber, email, agree, contactType, feedback) => (dispatch) => {
    let newFeed = {
        firstname: firstname,
        lastname: lastname,
        telNumber: telNumber,
        email: email,
        agree: agree,
        contactType: contactType,
        feedback: feedback
    }

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeed),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => {
            dispatch(addFeedback(response));
            alert('thanks for your feedback' + JSON.stringify(response));
        })
        .catch(error => { console.log('Post feedback ', error.message); alert('the feedback could not be posted/nError: ' + error.message); });
}

export let fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes').then(response => {
        if (response.ok) {
            return response;
        } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmess = new Error(error.message);
        throw errmess;
    }).then(response => response.json()).then(dishes => dispatch(addDishes(dishes))).catch(error => dispatch(dishesFailed(error.message)));
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
    return fetch(baseUrl + 'comments').then(response => {
        if (response.ok) {
            return response;
        } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmess = new Error(error.message);
        throw errmess;
    }).then(response => response.json()).then(comments => dispatch(addComments(comments))).catch(error => dispatch(commentsFailed(error.message)));
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

    return fetch(baseUrl + 'promotions').then(response => {
        if (response.ok) {
            return response;
        } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmess = new Error(error.message);
        throw errmess;
    }).then(response => response.json()).then(promos => dispatch(addPromos(promos))).catch(error => dispatch(promosFailed(error.message)));
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

    return fetch(baseUrl + 'leaders').then(response => {
        if (response.ok) {
            return response;
        } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmess = new Error(error.message);
        throw errmess;
    }).then(response => response.json()).then(leads => dispatch(addLeads(leads))).catch(error => dispatch(leadsFailed(error.message)));
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