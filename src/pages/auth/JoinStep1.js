import React, {useEffect} from 'react'
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
        //
        // </View>
    )
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: ValueConst.colors.themeColor,
    },
})

export default JoinStep1