import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import CustomButton from 'components/CustomButton'
import ValueConst from 'constants/ValueConst'

import bottomLogo from 'assets/img/text_logo_gray_small.png'

const ButtonGroup = props => {
    return (
        <View style={styles.groupLayout}>
            <View style={styles.btnGroup}>
                <CustomButton
                    title="학교 이메일로 로그인"
                    onPress={props.onLoginPress}
                    color={ValueConst.colors.colorPrimaryDark}
                    textColor={ValueConst.colors.white}
                    fontSize={ValueConst.dimensions.button_default}
                />
                <CustomButton
                    title="학교 이메일로 회원가입"
                    onPress={props.onJoinPress}
                    color={ValueConst.colors.white}
                    textColor={ValueConst.colors.colorPrimaryDark}
                    fontSize={ValueConst.dimensions.button_default}
                />
                <Image style={styles.bottomLogo} source={bottomLogo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    groupLayout: {
        margin: 20,
        alignItems: 'center',
    },
    btnGroup: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    bottomLogo: {
        marginTop: 40,
        marginBottom: 10,
        width: 60,
        height: 13,
    },
})

export default ButtonGroup
