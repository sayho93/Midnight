import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import ValueConst from 'constants/ValueConst'

const CustomButton = props => {
    const styles = StyleSheet.create({
        button: {
            width: '100%',
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.color,
            height: ValueConst.dimensions.button_height,
        },
        title: {
            fontSize: props.fontSize ? props.fontSize : ValueConst.dimensions.font_size_default,
            color: props.textColor,
            fontFamily: ValueConst.font.jalnan,
        },
    })

    return (
        <TouchableOpacity style={[styles.button, props.buttonAddStyle]} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
