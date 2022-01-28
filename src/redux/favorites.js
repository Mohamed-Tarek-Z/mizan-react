import * as ActionTypes from './ActionTypes';

export let Favorites = (state = {
    isLoading: true,
    errMessage: null,
    favorites: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITES:
            return { ...state, isLoading: false, errMessage: null, favorites: action.payload }
        case ActionTypes.FAVORITES_LOADING:
            return { ...state, isLoading: true, errMessage: null, favorites: [] }
        case ActionTypes.FAVORITES_FAILED:
            return { ...state, isLoading: false, errMessage: action.payload, favorites: [] }
        default:
            return state;
    }
}