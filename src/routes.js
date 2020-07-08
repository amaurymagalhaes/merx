import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';
import Login from './pages/Login';
import Register from './pages/Register';
import Balance from './pages/Balance';
import Menu from './pages/Menu';
import Friends from './pages/Friends';
import Payment from './pages/Payment';
import Business from './pages/Business';
import Profile from './pages/Profile';
import CreateBusiness from './pages/CreateBusiness';

const Stack = createStackNavigator();

function Routes() {
    async function verify() {
        const token = await AsyncStorage.getItem('Token');
        let initialRouteName = 'Menu';
        console.log(token);
        if (!token) {
            initialRouteName = 'Menu';
        }
        return initialRouteName;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={verify()} headerMode={null}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Balance" component={Balance} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Friends" component={Friends} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Business" component={Business} />
                <Stack.Screen
                    name="CreateBusiness"
                    component={CreateBusiness}
                />
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
