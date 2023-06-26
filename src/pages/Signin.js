import React from 'react';
import { SafeAreaView, Text, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const Signin = (params) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = () => {

        if (!username || !password) {
            Alert.alert('fitApp', 'Please fill all fields', [{ text: 'I get it!' }]);
            return;
        }

        const user = {
            username,
            password,
        }
        params.navigation.navigate('Dashboard', { user });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to fitApp</Text>
            <Input
                inputText="Username"
                placeholder="Enter username here..."
                onChangeText={setUsername}
            />
            <Input
                inputText="Password"
                placeholder="Enter password here..."
                isSecure="true"
                onChangeText={setPassword}
            />
            <Button text="Login" onPress={handleSubmit} />
            <Text style={{ margin: 20 }}>or</Text>
            <Text style={{ color: '#f55' }}>You don't have an account?</Text>
            <Button
                text="Create an account"
                onPress={() => params.navigation.navigate('SignUp')}
            />
        </SafeAreaView>
    )
}

export default Signin;

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