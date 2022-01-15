import * as ActionTypes from './ActionTypes';

export let Leaders = (state = {
    isLoading: true,
    errMessage: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADS:
            return { ...state, isLoading: false, errMessage: null, leaders: action.payload }
        case ActionTypes.LEADS_LOADING:
            return { ...state, isLoading: true, errMessage: null, leaders: [] }
        case ActionTypes.LEADS_FAILED:
            return { ...state, isLoading: false, errMessage: action.payload, leaders: [] }
        default:
            return state;
    }
}