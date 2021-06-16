import React from 'react'
import UserContainer from './containers/UserContainer'

import {createStore} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'

const store = createStore(reducers)

const App = () => {
    return (
        <Provider store={store}>
            <UserContainer />
        </Provider>
    )
}

export default App
