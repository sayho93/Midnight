import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'

const JoinStep1 = ({navigation}) => {
    return (
        <View style={GlobalStyle.background}>
            <TouchableOpacity onPress={() => navigation.navigate('JoinStep2', {count: 1})}>
                <Text>Detail Screen</Text>
            </TouchableOpacity>
        </View>
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        // </View>
    )
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    test: {
        backgroundColor: ValueConst.colors.themeColor,
    },
})

export default JoinStep1
