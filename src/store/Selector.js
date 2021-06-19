import {createSelector} from '@reduxjs/toolkit'

const user = state => state.user
const characters = state => state.characters

export const getUser = createSelector([user, characters], () => {
    const info = user
    info.characters = characters
    return info
})
