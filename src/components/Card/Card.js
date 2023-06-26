import React from "react";
import { Text, View, Image } from "react-native";
import styles from './Card.style';

const Card = (params) => {

    const { title, description, imageUrl } = params;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }} />
            <View style={styles.subContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description.slice(0, 65)}...</Text>
                </View>
                <Image
                    style={styles.icon}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/748/748073.png' }}
                />
            </View>
        </View>
    );
}

export default Card;