import * as ActionTypes from './ActionTypes';

export let Comments = (state = {
    errMessage: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return { ...state, errMessage: null, comments: state.comments.concat(comment) }
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMessage: null, comments: action.payload }
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMessage: action.payload, comments: [] }
        default:
            return state;
    }
}