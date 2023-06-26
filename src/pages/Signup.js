import React from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = (params) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');


    const handleSubmit = () => {
        if (!username || !password || !password2) {
            Alert.alert('fitApp', 'Please fill all fields', [{ text: 'I get it!' }]);
            return;
        }

        if (password !== password2) {
            Alert.alert('fitApp', 'Passwords do not match', [{ text: 'I get it!' }]);
            return;
        }

        const newUser = {
            username, password, password2
        }

        params.navigation.navigate('Dashboard', { newUser });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to fitApp</Text>
            <Input inputText="username" placeholder="Enter username here..." onChangeText={setUsername} />
            <Input inputText="Password" placeholder="Enter password here..." isSecure="true" onChangeText={setPassword} />
            <Input inputText="Password" placeholder="Enter password here again..." isSecure="true" onChangeText={setPassword2} />
            <Button text="SignUp" onPress={handleSubmit} />
            <Text style={{ margin: 20 }}>or</Text>
            <Text style={{ color: '#f55' }}>You already have an account?</Text>
            <Button text="Login" onPress={() => params.navigation.navigate('SignIn')} />
        </SafeAreaView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1faee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1d3557',
        marginBottom: 50,
    }
}); 