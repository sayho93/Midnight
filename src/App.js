import React from 'react'
import UserContainer from './containers/UserContainer'

import {createStore} from 'redux'
import * as reducers from './reducers'
// import reducers from './reducers'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'

const counterStore = createStore(reducers.counter)
const userStore = createStore(reducers.user)

const App = () => {
    return (
        <Provider store={{counterStore, userStore}}>
            <NavigationContainer>
                <UserContainer />
            </NavigationContainer>
        </Provider>
    )
}

export default App
