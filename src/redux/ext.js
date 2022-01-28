import * as ActionTypes from './ActionTypes';

export let Ext = (state = 'png', action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_EXT:
            return action.payload.ext === 'jpg' ? 'jpg' : 'png';
        default:
            return state;
    }
}