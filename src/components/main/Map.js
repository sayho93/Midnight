import React from 'react'
import {Text, View} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'

const Map = ({navigation}) => {
    return (
        <View style={GlobalStyle.background}>
            <Text style={GlobalStyle.textStyle}>Map</Text>
        </View>
    )
}

export default Map
