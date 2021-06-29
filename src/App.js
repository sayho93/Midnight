import React from 'react'
import AuthNavigator from 'pages/auth/AuthNavigator'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Store from 'store/Store'
import * as SplashScreen from 'expo-splash-screen'

import AppLoading from 'expo-app-loading'
import {Platform, Animated, View, StyleSheet, Image, StatusBar, SafeAreaView, useColorScheme} from 'react-native'
import Constants from 'expo-constants'
import splashImg from 'img/title_logo_small.png'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import ValueConst from './constants/ValueConst'

SplashScreen.preventAutoHideAsync().catch(() => {
    /* reloading the app might trigger some race conditions, ignore them */
})

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaProvider>
            <AnimatedAppLoader image={splashImg}>
                <Provider store={Store}>
                    <StatusBar
                        backgroundColor={ValueConst.colors.themeColor}
                        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        barStyle={'light-content'}
                    />
                    <NavigationContainer>
                        <AuthNavigator />
                    </NavigationContainer>
                </Provider>
            </AnimatedAppLoader>
        </SafeAreaProvider>
    )
}

function AnimatedAppLoader({children, image}) {
    const [isSplashReady, setSplashReady] = React.useState(false)

    // const startAsync = React.useMemo(
    //     // If you use a local image with require(...), use `Asset.fromModule`
    //     () => () => Asset.fromURI(image).downloadAsync(),
    //     [image]
    // )

    const onFinish = React.useMemo(() => {
        setSplashReady(true)
    }, [])

    if (!isSplashReady) {
        return (
            <AppLoading
                // Instruct SplashScreen not to hide yet, we want to do this manually
                autoHideSplash={false}
                // startAsync={startAsync}
                onError={console.error}
                onFinish={onFinish}
            />
        )
    }

    return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>
}

function AnimatedSplashScreen({children, image}) {
    const animation = React.useMemo(() => new Animated.Value(1), [])
    const [isAppReady, setAppReady] = React.useState(false)
    const [isSplashAnimationComplete, setAnimationComplete] = React.useState(false)

    React.useEffect(() => {
        if (isAppReady) {
            console.log('App Ready')
            const time = Platform.OS === 'android' ? 2000 : 2000
            setTimeout(() => {
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => setAnimationComplete(true))
            }, time)
        }
    }, [animation, isAppReady])

    const onImageLoaded = React.useMemo(
        () => async () => {
            try {
                await SplashScreen.hideAsync()

                await Promise.all([])
                // Load stuff
            } catch (e) {
                // handle errors
            } finally {
                setAppReady(true)
            }
        },
        []
    )

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Constants.manifest.splash.backgroundColor,
            }}>
            {isAppReady && children}
            {!isSplashAnimationComplete && (
                <Animated.View
                    pointerEvents="none"
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: Constants.manifest.splash.backgroundColor,
                            opacity: animation,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    ]}>
                    <Image
                        source={image}
                        style={{
                            width: 150,
                            height: 45,
                        }}
                        onLoadEnd={onImageLoaded}
                        fadeDuration={3}
                    />
                    {/*<Animated.Image*/}
                    {/*    style={{*/}
                    {/*        width: '100%',*/}
                    {/*        height: '100%',*/}
                    {/*        // resizeMode: Constants.manifest.splash.resizeMode || 'contain',*/}
                    {/*        // transform: [*/}
                    {/*        //     {*/}
                    {/*        //         scale: animation,*/}
                    {/*        //     },*/}
                    {/*        // ],*/}
                    {/*    }}*/}
                    {/*    source={image}*/}
                    {/*    onLoadEnd={onImageLoaded}*/}
                    {/*    fadeDuration={3}*/}
                    {/*/>*/}
                </Animated.View>
            )}
        </View>
    )
}

export default App
