import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const JoinStep1 = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {count: 1})}>
                <Text>Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JoinStep1
