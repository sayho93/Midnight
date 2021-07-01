import {createSelector} from '@reduxjs/toolkit'

const user = state => {
    console.log('Selector user')
    console.log(state)
    return state.user.info
}
const userCharacters = state => state.user.characters

const characters = state => state.characters

export const getUser = createSelector([user, userCharacters], info => info)
export const getCharacters = createSelector([characters], info => info)
