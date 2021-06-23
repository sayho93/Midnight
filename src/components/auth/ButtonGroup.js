import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import CustomButton from '../CustomButton'
import attr from '../../glob/attr'

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.groupLayout}>
                <View style={styles.btnGroup}>
                    <CustomButton
                        title="학교 이메일로 로그인"
                        onPress={this.props.onLoginPress}
                        color={attr.colors.colorPrimaryDark}
                        textColor={attr.colors.white}
                    />
                    <CustomButton
                        title="학교 이메일로 회원가입"
                        onPress={this.props.onJoinPress}
                        color={attr.colors.white}
                        textColor={attr.colors.colorPrimaryDark}
                    />
                    <Image style={styles.bottomLogo} source={require('../../../assets/img/text_logo_gray_small.png')} />
                </View>
            </View>
        )
    }
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
