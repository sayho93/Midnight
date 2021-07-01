import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import {logger} from 'redux-logger/src'
import UserSlice from './slices/UserSlice'
import CharacterSlice from './slices/CharacterSlice'

const rootReducer = combineReducers({
    user: UserSlice.reducer,
    characters: CharacterSlice.reducer,
})

const Store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
})

export default Store
