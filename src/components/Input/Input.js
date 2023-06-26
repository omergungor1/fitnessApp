import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from './Input.style';


export default ({ placeholder, inputText, isSecure = false, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>{inputText}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={isSecure}
                style={styles.input}
                onChangeText={onChangeText}
            />
        </View>
    );
}
