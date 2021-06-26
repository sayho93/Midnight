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
                    <View style={styles.lottieContainer}>
                        <LottieView
                            source={signup}
                            style={styles.lottie}
                            autoPlay={true}
                            loop={false}
                            resizeMode="contain"
                        />
                    </View>
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
                            style={[styles.input, {flex: 2.7}]}
                            placeholder="(필수) 내용을 입력하세요."
                            autoCorrect={false}
                            placeholderTextColor={ValueConst.colors.thisgray}
                        />
                        <TouchableOpacity style={styles.confirmBtn}>
                            <Text style={styles.title}>중복 확인</Text>
                        </TouchableOpacity>
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
                    <View style={styles.row}>
                        <Text style={styles.label}>PW확인</Text>
                        <TextInput
                            style={styles.input}
                            textContentType="password"
                            placeholder="(필수) 내용을 입력하세요."
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholderTextColor={ValueConst.colors.thisgray}
                        />
                    </View>
                    <CustomButton
                        title="인증 이메일 전송하기"
                        onPress={() => navigation.navigate('JoinStep2', {count: 1})}
                        color={ValueConst.colors.highlight}
                        textColor={ValueConst.colors.white}
                    />
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
    lottieContainer: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    lottie: {
        // width: 120,
        // height: 120,
    },
    row: {
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        height: ValueConst.dimensions.button_height,
    },
    label: {
        paddingLeft: 5,
        color: ValueConst.colors.white,
        flex: 1,
        fontFamily: ValueConst.font.jalnan,
        alignSelf: 'center',
    },
    input: {
        flex: 4,
        height: ValueConst.dimensions.button_height,
        backgroundColor: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_default,
    },
    confirmBtn: {
        flex: 1.3,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ValueConst.colors.highlight,
        height: ValueConst.dimensions.button_height,
    },
    title: {
        fontSize: ValueConst.dimensions.button_default,
        color: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
    },
})

export default JoinStep1
