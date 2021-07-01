import {createSlice} from '@reduxjs/toolkit'
import NetUtil from 'api/NetUtil'

const CharacterSlice = createSlice({
    name: 'character',
    initialState: {
        loading: false,
        info: {
            returnCode: null,
            returnMessage: null,
            data: [],
        },
    },
    reducers: {
        setLoading: {
            reducer: (state, action) => {
                if (state.loading === false) state.loading = true
            },
        },
        setData: {
            reducer: (state, action) => {
                if (state.loading === true) {
                    state.loading = false
                    state.info = action.payload
                }
                state.info = action.payload
            },
        },
    },
})

const {setLoading, setData} = CharacterSlice.actions

export const fetchCharacters = () => async dispatch => {
    dispatch(setLoading())
    const response = await NetUtil.getCharacters()
    dispatch(setData(response))
}

export default CharacterSlice
