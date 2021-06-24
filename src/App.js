import React, {useEffect, useState, useCallback} from 'react'
import AuthNavigator from 'pages/auth/AuthNavigator'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Store from 'store/Store'
import * as SplashScreen from 'expo-splash-screen'

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync()
                // Pre-load fonts, make any API calls you need to do here

                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                // await new Promise(resolve => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                // Tell the application to render
                setAppIsReady(true)
            }
        }

        prepare().then(async () => {
            await SplashScreen.hideAsync().then(() => console.log('hideAsync done'))
        })
    }, [])

    if (!appIsReady) return null

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App
