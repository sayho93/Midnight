import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: {
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
        },
        characters: [],
    },
    reducers: {
        setUser: {
            reducer: (state, action) => {
                state.user.apply(action.payload)
            },
        },
        setUserChar: {
            reducer: (state, action) => {
                state.characters.push(action.payload)
            },
        },
        removeUserChar: {
            reducer: (state, action) => {
                const character = state.find(item => item.id === action.payload)
                if (character) state.remove(character)
            },
        },
    },
})

export default UserSlice
