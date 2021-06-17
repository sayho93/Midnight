import * as types from './ActionTypes'

export const add = () => ({
    type: types.ADD,
})

export const remove = () => ({
    type: types.REMOVE,
})

export const increment = index => ({
    type: types.INCREMENT,
    index,
})

export const decrement = index => ({
    type: types.DECREMENT,
    index,
})

/*
 * User related Actions
 */
export const setUser = info => ({
    type: types.setUser,
    info,
})

export const setUserChar = list => ({
    type: types.setUserChar,
    list,
})
