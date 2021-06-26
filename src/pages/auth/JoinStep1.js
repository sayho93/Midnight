import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Platform,
    Alert,
} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import LottieView from 'lottie-react-native'
import signup from 'animations/signup.json'
import CustomButton from 'components/CustomButton'

const JoinStep1 = ({navigation}) => {
    const animationRef = React.useRef()
    React.useEffect(() => {
        setTimeout(() => {
            animationRef.current.play()
        }, 500)
    })

    return (
        <View style={GlobalStyle.background}>
            <ScrollView>
                <KeyboardAvoidingView
                    style={{flex: 1}}
                    behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
                    keyboardVerticalOffset={100}>
                    <View style={styles.layout}>
                        <View style={styles.lottieContainer}>
                            <LottieView
                                ref={animationRef}
                                source={signup}
                                autoPlay={false}
                                loop={false}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>이메일</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="(필수) 내용을 입력하세요."
                                autoCorrect={false}
                                placeholderTextColor={ValueConst.colors.aluminum}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>닉네임</Text>
                            <TextInput
                                style={[styles.input, {flex: 2.7}]}
                                placeholder="(필수) 내용을 입력하세요."
                                autoCorrect={false}
                                placeholderTextColor={ValueConst.colors.aluminum}
                            />
                            <TouchableOpacity style={styles.confirmBtn}>
                                <Text style={styles.conformBtnTitle}>중복 확인</Text>
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
                                placeholderTextColor={ValueConst.colors.aluminum}
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
                                placeholderTextColor={ValueConst.colors.aluminum}
                            />
                        </View>
                        <View style={styles.agreementsLayout}>
                            <TouchableOpacity
                                style={styles.agreements}
                                onPress={() => {
                                    Alert.alert('aa')
                                }}>
                                <Text style={styles.agreementsText}>개인정보처리방침</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.agreements}
                                onPress={() => {
                                    Alert.alert('bb')
                                }}>
                                <Text style={styles.agreementsText}>사용자이용약관</Text>
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.guideText}>
                            가입하기를 누르시면 개인정보처리방침과 사용자이용약관에 동의한 것으로 간주됩니다.
                        </Text>
                        <CustomButton
                            title="인증 이메일 전송하기"
                            onPress={() => navigation.navigate('JoinStep2', {count: 1})}
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
    row: {
        width: '100%',
        marginBottom: 10,
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
        height: ValueConst.dimensions.input_height,
        backgroundColor: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_default,
        paddingVertical: 0,
        paddingHorizontal: 10,
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
    agreementsText: {
        fontSize: ValueConst.dimensions.font_size_default,
        fontFamily: ValueConst.font.jalnan,
        textAlign: 'center',
        color: ValueConst.colors.white,
    },
    guideText: {
        color: ValueConst.colors.white,
        fontSize: ValueConst.dimensions.font_size_default,
        marginBottom: ValueConst.dimensions.list_margin,
        fontFamily: ValueConst.font.nanumSquare,
    },
})

export default JoinStep1
