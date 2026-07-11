import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'store/storage';

import { dashboardAPI } from 'store/api';
import userReducer from './user';
import utilReducer from './util';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedUserReducerReducer = persistReducer(persistConfig, userReducer);
const persistedUtilReducerReducer = persistReducer(persistConfig, utilReducer);

export const rootReducer = combineReducers({
    user: persistedUserReducerReducer,
    util: persistedUtilReducerReducer,
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
});
