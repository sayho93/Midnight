import React from 'react'
import {animated, useSpring} from 'react-spring'
import {StyleSheet, TextInput, View} from 'react-native'
import ValueConst from '../../constant/ValueConst'
import CustomButton from '../CustomButton'

const AnimatedView = animated(View)

export const InputGroup = props => {
    const animation = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        delay: 100,
    })

    return (
        <AnimatedView style={animation}>
            <View style={styles.groupLayout}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => props.emailHandler(text)}
                        placeholder="이메일"
                        placeholderTextColor={ValueConst.colors.thisgray}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => props.pwHandler(text)}
                        textContentType="password"
                        placeholder="패스워드"
                        returnKeyType="go"
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholderTextColor={ValueConst.colors.thisgray}
                    />
                    <CustomButton
                        title="로그인"
                        onPress={props.onLoginPress}
                        color={ValueConst.colors.colorPrimaryDark}
                        textColor={ValueConst.colors.white}
                    />
                    <CustomButton
                        title="취소"
                        onPress={props.onCancelPress}
                        color={ValueConst.colors.white}
                        textColor={ValueConst.colors.colorPrimaryDark}
                    />
                </View>
            </View>
        </AnimatedView>
    )
}

const styles = StyleSheet.create({
    groupLayout: {
        margin: 20,
        alignItems: 'center',
    },
    bottomLogo: {
        marginTop: 40,
        marginBottom: 10,
        width: 60,
        height: 13,
    },
    inputGroup: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    input: {
        marginTop: 2,
        marginBottom: 2,
        height: ValueConst.dimensions.button_height,
        backgroundColor: ValueConst.colors.white,
        color: ValueConst.colors.colorPrimaryDark,
        fontFamily: ValueConst.font.jalnan,
        width: '100%',
    },
})
