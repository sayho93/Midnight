import React, {useEffect} from 'react'
import AuthNavigator from 'pages/auth/AuthNavigator'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Store from 'store/Store'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App
