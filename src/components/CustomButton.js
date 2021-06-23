import attr from '../glob/attr'
import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class CustomButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = StyleSheet.create({
            button: {
                width: '100%',
                marginTop: 5,
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.props.color,
                height: attr.dimensions.button_height,
            },
            title: {
                fontSize: attr.dimensions.button_default,
                color: this.props.textColor,
                fontFamily: attr.font.jalnan,
            },
        })

        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
