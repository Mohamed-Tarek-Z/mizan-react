import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Ext } from './ext';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export let ConfigureStore = () => {
    let store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ext: Ext
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
};