import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default First = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Second Screen</Text>
            <View style={styles.button}
                onTouchEnd={() => navigation.navigate('First')}
            >
                <Text style={styles.buttonText}>First</Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1faee',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#a8dadc',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }

});