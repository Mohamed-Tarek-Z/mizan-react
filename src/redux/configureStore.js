import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Favorites } from './favorites';
import { Ext } from './ext';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export let ConfigureStore = () => {
    let store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            favorites: Favorites,
            ext: Ext,
            auth: Auth
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
};