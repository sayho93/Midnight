import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import LottieView from 'lottie-react-native'
import signup from 'animations/signup.json'
import CustomButton from '../../components/CustomButton'

const JoinStep1 = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior="position" style={GlobalStyle.background}>
            <ScrollView style={styles.fullHeight}>
                <View style={styles.layout}>
                    <LottieView source={signup} style={styles.lottie} autoPlay={true} loop={false} resizeMode="cover" />
                    <View style={styles.row}>
                        <Text style={styles.label}>이메일</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(필수) 내용을 입력하세요."
                            autoCorrect={false}
                            placeholderTextColor={ValueConst.colors.thisgray}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>닉네임</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(필수) 내용을 입력하세요."
                            autoCorrect={false}
                            placeholderTextColor={ValueConst.colors.thisgray}
                        />
                        <CustomButton
                            title="로그인"
                            // onPress={props.onLoginPress}
                            color={ValueConst.colors.colorPrimaryDark}
                            textColor={ValueConst.colors.white}
                            style={styles.confirmBtn}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>PW</Text>
                        <TextInput
                            style={styles.input}
                            textContentType="password"
                            placeholder="(필수) 내용을 입력하세요."
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholderTextColor={ValueConst.colors.thisgray}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('JoinStep2', {count: 1})}>
                        <Text>Detail Screen</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    fullHeight: {
        height: '100%',
    },
    layout: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        flex: 1,
        margin: 15,
        width: 120,
        height: 120,
    },
    row: {
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    label: {
        color: ValueConst.colors.white,
        flex: 1,
        fontFamily: ValueConst.font.jalnan,
        textAlignVertical: 'center',
        // width: 70,
    },
    input: {
        flex: 4,
        backgroundColor: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
    },
    confirmBtn: {
        flex: 1,
        color: ValueConst.colors.white,
        backgroundColor: ValueConst.colors.highlight,
    },
})

export default JoinStep1
