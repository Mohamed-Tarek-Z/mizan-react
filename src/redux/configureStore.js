import { createStore } from '@reduxjs/toolkit';
import { Reducer, initialState } from './reducer';

export let ConfigureStore = () => {
    let store = createStore(Reducer, initialState);
    return store;
};