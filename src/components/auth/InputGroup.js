import React from 'react'
import {animated, useSpring} from 'react-spring'
import {StyleSheet, TextInput, View} from 'react-native'
import attr from '../glob/attr'
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
                        placeholderTextColor={attr.colors.thisgray}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => props.pwHandler(text)}
                        textContentType="password"
                        placeholder="패스워드"
                        returnKeyType="go"
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholderTextColor={attr.colors.thisgray}
                    />
                    <CustomButton
                        title="로그인"
                        onPress={props.onLoginPress}
                        color={attr.colors.colorPrimaryDark}
                        textColor={attr.colors.white}
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
        height: attr.dimensions.button_height,
        backgroundColor: attr.colors.white,
        color: attr.colors.colorPrimaryDark,
        fontFamily: attr.font.jalnan,
        width: '100%',
    },
})
