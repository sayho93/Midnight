import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import LottieView from 'lottie-react-native'
import signup from 'animations/signup.json'
import LabeledTextInput from 'components/auth/LabeledTextInput'
import CustomButton from 'components/CustomButton'

const JoinStep1 = ({navigation}) => {
    const animationRef = React.useRef()
    React.useEffect(() => {
        setTimeout(() => {
            animationRef.current.play()
        }, 500)
    })

    const [inputs, setInputs] = React.useState({
        email: '',
        nickname: '',
        pw: '',
        pwc: '',
    })

    //extract values from state
    const {email, nickname, pw, pwc} = inputs

    const onChange = (name, text) => {
        console.log(name)
        console.log(text)
        setInputs({
            ...inputs,
            [name]: text,
        })
    }

    const onNextPress = () => {
        console.log(inputs)
        // navigation.navigate('JoinStep2', {count: 1})
    }

    return (
        <View style={GlobalStyle.background}>
            <ScrollView>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'position' : 'padding'} keyboardVerticalOffset={100}>
                    <View style={styles.layout}>
                        <View style={styles.lottieContainer}>
                            <LottieView ref={animationRef} source={signup} autoPlay={false} loop={false} resizeMode="cover" />
                        </View>
                        <LabeledTextInput name="email" onChange={onChange} labelText="이메일" />
                        <LabeledTextInput
                            name="nickname"
                            onChange={onChange}
                            labelText="닉네임"
                            addInputStyle={{flex: 2.7}}
                            addComponent={
                                <TouchableOpacity style={styles.confirmBtn}>
                                    <Text style={styles.conformBtnTitle}>중복 확인</Text>
                                </TouchableOpacity>
                            }
                        />
                        <LabeledTextInput name="pw" onChange={onChange} labelText="PW" isPw={true} />
                        <LabeledTextInput name="pwc" onChange={onChange} labelText="PW확인" isPw={true} />

                        <View style={styles.agreementsLayout}>
                            <CustomButton
                                buttonAddStyle={styles.agreements}
                                textColor={ValueConst.colors.white}
                                title="개인정보처리방침"
                                onPress={() => Alert.alert('aa')}
                            />
                            <CustomButton
                                buttonAddStyle={styles.agreements}
                                textColor={ValueConst.colors.white}
                                title="사용자이용약관"
                                onPress={() => Alert.alert('bb')}
                            />
                        </View>
                        <Text style={styles.guideText}>가입하기를 누르시면 개인정보처리방침과 사용자이용약관에 동의한 것으로 간주됩니다.</Text>
                        <CustomButton
                            title="인증 이메일 전송하기"
                            onPress={onNextPress}
                            color={ValueConst.colors.highlight}
                            textColor={ValueConst.colors.white}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
    confirmBtn: {
        flex: 1.3,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ValueConst.colors.highlight,
        height: ValueConst.dimensions.input_height,
    },
    conformBtnTitle: {
        fontSize: ValueConst.dimensions.font_size_default,
        color: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
    },
    agreementsLayout: {
        flex: 1,
        marginBottom: ValueConst.dimensions.list_margin,
        flexDirection: 'row',
    },
    agreements: {
        padding: 10,
        flex: 1,
    },
    guideText: {
        color: ValueConst.colors.white,
        fontSize: ValueConst.dimensions.font_size_default,
        marginBottom: ValueConst.dimensions.list_margin,
        fontFamily: ValueConst.font.nanumSquare,
    },
})

export default JoinStep1
