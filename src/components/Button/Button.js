import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Button.style';

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;