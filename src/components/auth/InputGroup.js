import React from 'react'
import {animated, useSpring} from 'react-spring'
import {StyleSheet, TextInput, View, Text} from 'react-native'
import ValueConst from 'constant/ValueConst'
import CustomButton from 'components/CustomButton'

import {connect} from 'react-redux'
import {getUser} from 'store/Selector'
import UserSlice from 'store/slices/UserSlice'

const AnimatedView = animated(View)

const InputGroupComponent = props => {
    console.log(props)
    console.log(props.user)
    console.log(props.user.nickName)
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
                        color={ValueConst.colors.themeColor}
                        textColor={ValueConst.colors.white}
                    />
                    <Text style={styles.test}>{props.user.id}</Text>
                    <Text style={styles.test}>{props.user.nickname}</Text>
                </View>
            </View>
        </AnimatedView>
    )
}

const mapStateToProps = state => ({
    test: state.info,
    user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
    setUser: info => dispatch(UserSlice.actions.setUser(info)),
})

export const InputGroup = connect(mapStateToProps, mapDispatchToProps)(InputGroupComponent)

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
    test: {
        marginTop: 2,
        marginBottom: 2,
        height: ValueConst.dimensions.button_height,
        // backgroundColor: ValueConst.colors.white,
        color: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
        width: '100%',
        textAlign: 'center',
    },
})
