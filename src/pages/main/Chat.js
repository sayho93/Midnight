import React from 'react'
import {Text, View} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'

const Chat = ({navigation}) => {
    return (
        <View style={GlobalStyle.background}>
            <Text style={GlobalStyle.textStyle}>Chat</Text>
        </View>
    )
}

export default Chat
