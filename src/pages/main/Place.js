import React from 'react'
import {Text, View} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'

const Place = ({navigation}) => {
    return (
        <View style={GlobalStyle.background}>
            <Text style={GlobalStyle.textStyle}>Place</Text>
        </View>
    )
}

export default Place
