import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import eventSlice from './meetSlice'
const rootReducer = combineReducers({
    auth: authSlice,
    meet: eventSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;