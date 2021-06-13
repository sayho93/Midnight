/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import LottieView from 'lottie-react-native';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        backgroundColor: '#243447',
        height: '100%',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <View style={styles.lottieContainer}>
                <LottieView
                    source={require('./assets/animations/love-explosion.json')}
                    style={styles.lottieArea}
                    autoPlay
                    loop
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    lottieArea: {
        width: 180,
        height: 180,
    },
    lottieContainer: {
        // flex: 1,
        // backgroundColor: 'red',
        // width: '100%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
