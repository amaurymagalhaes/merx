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
    TextButton,
    RegisterButton,
    RegisterText,
    RegisterText2,
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
            await AsyncStorage.setItem(
                'UserId',
                response.data.user.id.toString(),
            );
            await AsyncStorage.setItem(
                'Username',
                response.data.user.username.toString(),
            );
            await AsyncStorage.setItem(
                'NameUser',
                response.data.user.name.toString(),
            );
            await AsyncStorage.setItem(
                'UserEmail',
                response.data.user.email.toString(),
            );
            await AsyncStorage.setItem(
                'UserPhone',
                response.data.user.phone.toString(),
            );
            await AsyncStorage.setItem(
                'UserCPF',
                response.data.user.cpf.toString(),
            );
            await AsyncStorage.setItem(
                'UserBirthdate',
                response.data.user.birthdate.toString(),
            );

            console.log(response.data.user);
            navigation.navigate('Balance');
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
            <EnterButton color="#C59E00" onPress={() => signIn()}>
                <TextButton>Entrar</TextButton>
            </EnterButton>
            <RegisterButton onPress={() => navigation.navigate('Register')}>
                <RegisterText>Ainda não possuo conta</RegisterText>
                <RegisterText2>Criar nova conta</RegisterText2>
            </RegisterButton>
        </Background>
    );
}
