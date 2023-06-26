import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    inputText: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: deviceSize.width * 0.92,
        height: 40,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    }
});