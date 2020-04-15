import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';
import Login from './pages/Login';
import Register from './pages/Register';
import Balance from './pages/Balance';

const Stack = createStackNavigator();

function Routes() {
    async function verify() {
        const token = await AsyncStorage.getItem('Token');
        console.log(token);
        if (!token) {
            return false;
        }
        return true;
    }

    function initialRoute() {
        let initialRouteName = 'Balance';
        if (!verify()) {
            initialRouteName = 'Login';
        }
        return initialRouteName;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={initialRoute()}
                headerMode={null}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Balance" component={Balance} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;

/*
screenOptions={{
    headerTintColor: '#C59E00',
    headerStyle: {backgroundColor: '#1E1E1E'},
}}
*/
