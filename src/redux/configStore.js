import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './cryptos/cryptos';

const rootReducer = combineReducers({ cryptosReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
