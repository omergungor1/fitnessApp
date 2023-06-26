import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { ListItem } from 'react-native-elements'
import Card from "../components/Card";


const Dashboard = ({ navigation, route }) => {
    const user = route.params.user;
    const list = [
        {
            title: 'Squat',
            description: 'Squat is a lower body exercise where you bend your knees and hips to lower your body down and then stand back up. It primarily targets the muscles of the thighs, hips, and glutes.',
            imageUrl: 'https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg'
        },
        {
            title: 'Bench Press',
            description: 'Bench Press is a compound exercise performed lying on a bench with a weighted barbell. It involves pushing the barbell upwards from the chest to straight arms, primarily targeting the chest, shoulders, and triceps.',
            imageUrl: 'https://static.strengthlevel.com/images/illustrations/incline-bench-press-1000x1000.jpg'
        },
        {
            title: 'Deadlift',
            description: 'Deadlift is a full-body exercise where you lift a weighted barbell from the ground while maintaining proper form. It engages multiple muscle groups, including the legs, back, glutes, and core.',
            imageUrl: 'https://static.strengthlevel.com/images/illustrations/deadlift-1-1000x1000.jpg'
        },
        {
            title: 'Shoulder Press',
            description: 'Shoulder Press, also known as the Overhead Press, involves lifting a weighted barbell or dumbbells from shoulder level to overhead. It targets the shoulder muscles, primarily the deltoids.',
            imageUrl: 'https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg'
        },
        {
            title: 'Pull-up',
            description: 'Pull-up is an upper body exercise performed by hanging from a bar and pulling your body up until the chin reaches or clears the bar. It primarily targets the back, biceps, and shoulders.',
            imageUrl: 'https://static.strengthlevel.com/images/illustrations/pull-ups-1000x1000.jpg'
        },
        {
            title: 'Barbell Row',
            description: 'Barbell Row is a compound exercise where you bend over with a barbell in hand, pull it towards your abdomen, and then lower it back down. It primarily targets the muscles of the back, particularly the lats and rhomboids.',
            imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/One-Arm-Barbell-Row-.gif'
        },
        {
            title: 'Lunges',
            description: 'Lunges are performed by stepping forward with one leg, lowering the hips until both knees are bent at a 90-degree angle, and then pushing back up. They target the muscles of the legs, including the quadriceps, hamstrings, and glutes.',
            imageUrl: 'https://static.wixstatic.com/media/42934c_78034dd0298d455c93ce19e4a8cffc39~mv2.jpg/v1/fill/w_506,h_461,al_c,lg_1,q_80,enc_auto/42934c_78034dd0298d455c93ce19e4a8cffc39~mv2.jpg'
        },
        {
            title: 'Bicep Curl',
            description: 'Bicep Curl is an isolation exercise where you hold a dumbbell or barbell in hand and curl it towards the shoulder by flexing the elbow. It primarily targets the biceps muscles.',
            imageUrl: 'https://s3assets.skimble.com/assets/2287282/image_iphone.jpg'
        },
        {
            title: 'Tricep Dip',
            description: 'Tricep Dip is performed by supporting your body weight on your hands placed behind you on a bench or parallel bars, and then bending your elbows to lower your body down and pushing back up. It primarily targets the triceps muscles.',
            imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-dips-on-floors.gif'
        },
        {
            title: 'Plank',
            description: 'Plank is an isometric exercise where you hold a position similar to the top of a push-up, with your body in a straight line and supported on your forearms and toes. It engages the core muscles, including the abs, back, and shoulders, to improve stability and strength.',
            imageUrl: 'https://blog.ssnsports.com.tr/wp-content/uploads/2020/11/plank-egzersizi-nedir.jpg'
        },
    ];


    const keyExtractor = (item, index) => { return (index.toString()) };

    const renderItem = ({ item }) => {
        return (
            <View>
                <Card title={item.title} description={item.description} imageUrl={item.imageUrl} />
            </View>
        );
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Dashboard</Text>
                <Text style={styles.subHeaderText}>Welcome {user.username}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.body}>
                <Text style={styles.subHeaderText}>✅ Start exercises now!</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, margin: 10 }}
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1faee',
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    body: {
        alignItems: 'center',
        marginTop: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 18,
        marginTop: 5,
        color: '#1d3557',
    },
    divider: {
        borderBottomColor: '#121517',
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
});

export default Dashboard;




