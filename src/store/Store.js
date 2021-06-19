import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import {logger} from 'redux-logger/src'

const rootReducer = combineReducers({
    user: UserSlice.reducer,
})

const Store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
})

export default Store
