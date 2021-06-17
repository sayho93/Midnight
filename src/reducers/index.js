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

export const counter = (state = initialState.counter, action) => {
    const {counter} = state

    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum + 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }
        case 'DECREMENT':
            return {
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }
        case 'ADD':
            return {
                counter: [
                    ...counter,
                    {
                        counterNum: 0,
                    },
                ],
            }
        case 'REMOVE':
            return {
                counter: counter.slice(0, counter.length - 1),
            }

        default:
            return state
    }
}

export const user = (state = initialState.user, action) => {
    const {user} = state

    switch (action.type) {
        case 'SETUSER':
            return {
                user,
            }
        case 'SETUSERCHAR':
            return {
                user,
            }
    }
}
