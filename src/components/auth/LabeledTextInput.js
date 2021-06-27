import {Text, TextInput, View, StyleSheet} from 'react-native'
import ValueConst from '../../constants/ValueConst'
import React from 'react'

const LabeledTextInput = props => {
    return (
        <View style={[styles.row, props.rowAddStyle]}>
            <Text style={styles.label}>{props.labelText}</Text>
            <TextInput
                style={[styles.input, props.addInputStyle]}
                placeholder={props.placeholder ? props.placeholder : '(필수) 내용을 입력하세요.'}
                autoCorrect={false}
                placeholderTextColor={ValueConst.colors.aluminum}
                multiline={props.multiline}
                numberofLines={props.lines}
                // textContentType={props.isPw ? 'password' : 'text'}
                secureTextEntry={!!props.isPw}
                onChangeText={text => props.onChange(props.name, text)}
            />
            {props.addComponent}
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default LabeledTextInput
