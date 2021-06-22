import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const JoinStep2 = ({route, navigation}) => {
    const {count} = route.params
    return (
        <>
            <TouchableOpacity onPress={() => navigation.popToTop('Home')} style={{backgroundColor: 'yellow', flex: 1}}>
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.push('Detail', {count: count + 1})}
                style={{backgroundColor: 'blue', flex: 1}}>
                <Text>Detail {count}</Text>
            </TouchableOpacity>
        </>
    )
}

export default JoinStep2
