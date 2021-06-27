import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'

const JoinStep3 = ({navigation}) => {
    // useEffect(() => {
    //     navigation.setOptions({title: '관심사 선택'})
    // }, [navigation])
    // const {count} = route.params
    return (
        <View style={GlobalStyle.background}>
            <TouchableOpacity onPress={() => navigation.popToTop('Home')}>
                <Text>Join Step 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('JoinStep4')}>
                <Text>move</Text>
            </TouchableOpacity>
        </View>
    )
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    test: {
        backgroundColor: ValueConst.colors.themeColor,
    },
})

export default JoinStep3
