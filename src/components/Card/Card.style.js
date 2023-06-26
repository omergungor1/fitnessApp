import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 120,
    },
    subContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    icon: {
        width: 25,
        height: 25,
        borderRadius: 25,
    },
    infoBox: {
        width: deviceSize.width - 150,
    }
});

export default Styles;