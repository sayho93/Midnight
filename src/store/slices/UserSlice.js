import {createSlice} from '@reduxjs/toolkit'
import NetUtil from '../../api/NetUtil'

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        info: {
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
        setLoading: {
            reducer: (state, action) => {
                if (state.loading === false) state.loading = true
            },
        },
        setNickName: {
            reducer: (state, action) => {
                state.info.nickName = action.payload
            },
        },
        setProfileId: {
            reducer: (state, action) => {
                state.info.profileId = action.payload
            },
        },
        setPush: {
            reducer: (state, action) => {
                state.info.push = action.payload
            },
        },
        setBgId: {
            reducer: (state, action) => {
                state.info.bgId = action.payload
            },
        },
        setUser: {
            reducer: (state, action) => {
                if (state.loading === true) {
                    state.loading = false
                    state.info = action.payload
                }
                state.info = action.payload
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

// const fetchUser = (email, password) => async dispatch => {
//     dispatch(setLoading())
//     const user = await NetUtil.login(email, password)
// }
