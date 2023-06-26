import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#a8dadc',
        borderRadius: 8,
        alignItems: 'center',
        width: deviceSize.width * 0.92,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
});