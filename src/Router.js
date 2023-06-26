import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/Dashboard';
import Second from './pages/Second';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          name="Second"
          component={Second}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;