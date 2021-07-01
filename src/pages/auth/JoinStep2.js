import React from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TextInput} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import imgProfile from 'img/img_profile.png'
import ValueConst from 'constants/ValueConst'
import LabeledTextInput from 'components/auth/LabeledTextInput'
import CustomButton from '../../components/CustomButton'
import {RadioButton} from 'react-native-paper'
const JoinStep2 = ({route, navigation}) => {
    const {count} = route.params
    const [checked, setChecked] = React.useState('first')

    const onChange = (name, text) => {
        console.log('onChange')
    }

    const onNextPress = () => {
        navigation.navigate('JoinStep3')
    }

    return (
        <View style={GlobalStyle.background}>
            <ScrollView>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'position' : 'padding'} keyboardVerticalOffset={100}>
                    <View style={styles.layout}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} source={imgProfile} />
                            <Text style={styles.imgLabel}>프로필 사진</Text>
                        </View>
                        <LabeledTextInput name="age" onChange={onChange} labelText="나이" />
                        <LabeledTextInput
                            name="age"
                            onChange={onChange}
                            labelText="자기소개"
                            multiline={true}
                            lines="10"
                            rowAddStyle={{height: 200}}
                            addInputStyle={styles.textArea}
                        />

                        <View style={styles.row}>
                            <Text style={styles.label}>성별</Text>
                            <View style={styles.radioArea}>
                                <RadioButton
                                    value="남자"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    color={ValueConst.colors.highlight}
                                    uncheckedColor={ValueConst.colors.white}
                                    onPress={() => setChecked('first')}
                                />
                                <Text style={styles.radioLabel}>남자</Text>
                                <RadioButton
                                    value="여자"
                                    status={checked === 'second' ? 'checked' : 'second'}
                                    color={ValueConst.colors.highlight}
                                    uncheckedColor={ValueConst.colors.white}
                                    onPress={() => setChecked('second')}
                                />
                                <Text style={styles.radioLabel}>여자</Text>
                            </View>
                        </View>

                        <CustomButton
                            title="다음으로"
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
        margin: ValueConst.dimensions.list_margin,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    },
    img: {
        resizeMode: 'cover',
        width: 90,
        height: 90,
    },
    imgLabel: {
        color: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
    },
    textArea: {
        height: 200,
        justifyContent: 'flex-start',
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
    radioArea: {
        flex: 4,
        flexDirection: 'row',
    },
    radioLabel: {
        paddingRight: 20,
        color: ValueConst.colors.white,
        fontFamily: ValueConst.font.jalnan,
        alignSelf: 'center',
        fontSize: ValueConst.dimensions.font_size_default,
    },
})

export default JoinStep2
