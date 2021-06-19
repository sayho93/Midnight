import {createSelector} from '@reduxjs/toolkit'

const user = state => {
    console.log('Selector user')
    console.log(state)
    return state.user.info
}
const characters = state => state.user.characters

export const getUser = createSelector([user, characters], info => info)
