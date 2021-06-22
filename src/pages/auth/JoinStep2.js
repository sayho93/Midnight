import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'

const JoinStep2 = ({route, navigation}) => {
    const {count} = route.params
    return (
        <View style={GlobalStyle.background}>
            <TouchableOpacity onPress={() => navigation.popToTop('Home')} style={{backgroundColor: 'yellow', flex: 1}}>
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('JoinStep3', {count: count + 1})}
                style={{backgroundColor: 'blue', flex: 1}}>
                <Text>Detail {count}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JoinStep2
