import React from 'react'
import {Text, View} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'

const Feed = ({navigation}) => {
    return (
        <View style={GlobalStyle.background}>
            <Text style={GlobalStyle.textStyle}>Feed</Text>
        </View>
    )
}

export default Feed
