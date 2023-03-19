import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { dashboardAPI } from 'store/api';
import userReducer from './user';
import utilReducer from './util';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedUserReducerReducer = persistReducer(persistConfig, userReducer);

export const rootReducer = combineReducers({
    user: persistedUserReducerReducer,
    util: utilReducer,
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
});
