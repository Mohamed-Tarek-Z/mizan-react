import * as ActionTypes from './ActionTypes';

export let addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export let changeExt = (ext) => ({
    type: ActionTypes.CHANGE_EXT,
    payload: {
        ext: ext
    }
});