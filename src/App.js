import React from 'react'
import UserContainer from './containers/UserContainer'

import {createStore} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'

const store = createStore(reducers)

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <UserContainer />
            </NavigationContainer>
        </Provider>
    )
}

export default App
