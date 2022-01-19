import * as ActionTypes from './ActionTypes';

export let Feedback = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            {
                state = action.payload;
                return state;
            } 
        default:
            return state;
    }
}