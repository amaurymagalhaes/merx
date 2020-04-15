import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {
    Background,
    LogoText,
    Form,
    Input,
    Subtitle,
    EnterButton,
} from './styles';

import api from '../../services/api';

export default function Login({navigation}) {
    const [account, setAccount] = useState(null);
    const [password, setPassword] = useState(null);

    function handleAccount(_account) {
        setAccount(_account);
    }
    function handlePassword(_password) {
        setPassword(_password);
    }

    async function signIn() {
        try {
            if (account === '' || password === '' || !account || !password) {
                Alert.alert(
                    'Campos',
                    'Os campos não estão preenchidos corretamente.',
                );
            }
            const response = await api.post('/sessions', {
                email: account,
                password,
            });
            await AsyncStorage.setItem('Token', response.data.token);
            console.log(response.data.user.id);
            await AsyncStorage.setItem(
                'UserId',
                response.data.user.id.toString(),
            );
            navigation.navigate('Balance');
            console.log(response);
        } catch (_err) {
            console.log(_err);
        }
    }

    return (
        <Background>
            <LogoText>MERX</LogoText>
            <Subtitle>login</Subtitle>
            <Form>
                <Input
                    placeholder="e-mail"
                    placeholderTextColor="#c59e00"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    onChangeText={(text) => handleAccount(text)}
                />
                <Input
                    placeholder="senha"
                    placeholderTextColor="#c59e00"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    secureTextEntry
                    onChangeText={(text) => handlePassword(text)}
                />
            </Form>
            <EnterButton
                title="Entrar"
                color="#C59E00"
                onPress={() => signIn()}
            />
            <EnterButton
                title="Registrar"
                color="black"
                onPress={() => navigation.navigate('Register')}
            />
        </Background>
    );
}
