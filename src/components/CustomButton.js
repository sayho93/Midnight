import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import ValueConst from '../utils/ValueConst';

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
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
                height: 40,
            },
            title: {
                fontSize: 15,
                color: this.props.textColor,
                fontFamily: 'Jalnan',
            },
        });

        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
