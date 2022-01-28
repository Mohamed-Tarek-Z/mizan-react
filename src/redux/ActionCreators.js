import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export let addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export let postComment = (dishId, rating, comment) => (dispatch) => {
    let newComment = {
        dishId: dishId,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
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
            throw new Error(error.message);
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
            throw new Error(error.message);
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

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    dispatch(requestLogin(creds))
    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw new Error(error.message);
    }).then(response => response.json()).then(response => {
        if (response.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    }).catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}

export const postFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "POST",
        body: JSON.stringify({ "_id": dishId }),
        headers: {
            "Content-Type": "application/json",
            'Authorization': bearer
        },
        credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw error;
    }).then(response => response.json()).then(favorites => dispatch(addFavorites(favorites))).catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        },
        credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw new Error(error.message);
    }).then(response => response.json()).then(favorites => dispatch(addFavorites(favorites))).catch(error => dispatch(favoritesFailed(error.message)));
};

export let fetchFavorites = () => (dispatch) => {
    dispatch(favoritesLoading(true));

    let bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites', {
        headers: {
            'Authorization': bearer
        }
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw new Error(error.message);
    }).then(response => response.json()).then(favorites => dispatch(addFavorites(favorites))).catch(error => dispatch(favoritesFailed(error.message)));
}

export let favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export let favoritesFailed = (errmessage) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmessage
});

export let addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});