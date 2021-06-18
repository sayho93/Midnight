import * as types from '../actions/ActionTypes'
import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    user: {
        id: 0,
        account: '',
        email: '',
        nickName: '',
        joinedVia: '',
        lat: 0,
        lng: 0,
        profileId: 0,
        location: 0,
        sido: 0,
        push: 1,
        bgId: 0,
        birth: '',
        age: 0,
        identity: 0,
        phone: '',
        desc: '',
        accessDate: '',
        isAdmin: 0,
        regDate: '',
        characters: [],
    },
    counter: [
        {
            counterNum: 0,
        },
    ],
}

export const user = createReducer(initialState.user, {
    setUser: (state, action) => state + action.payload,
    setUserChar: (state, action) => state - action.payload,
})
