import React from 'react'
import AuthNavigator from './pages/auth/AuthNavigator'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Store from './store/Store'

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App
