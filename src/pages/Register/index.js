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

export default function Register({navigation}) {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCPF] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(_username) {
        setUsername(_username);
    }

    function handleFullName(_fullName) {
        setFullName(_fullName);
    }

    function handlePassword(_password) {
        setPassword(_password);
    }

    function handleEmail(_email) {
        setEmail(_email);
    }

    function handlePhone(_phone) {
        setPhone(_phone);
    }

    function handleCPF(_cpf) {
        setCPF(_cpf);
    }

    function handleBirthdate(_birthdate) {
        setBirthdate(_birthdate);
    }

    async function SignIn(_email, _password) {
        try {
            const response = await api.post('/sessions', {
                email: _email,
                password: _password,
            });
            await AsyncStorage.setItem('Token', response.data.token);
            navigation.navigate('Balance');
        } catch (_err) {
            console.log(_err);
        }
    }

    async function SignUp() {
        try {
            const response = await api.post('/users', {
                username,
                email,
                password,
                name: fullName,
                birthdate,
                cpf,
                phone,
            });
            console.log(response);

            Alert.alert(
                'Registro',
                'Registro feito com sucesso.',
                [
                    {
                        text: 'Ótimo! :)',
                        onPress: () => {
                            SignIn(email, password);
                        },
                    },
                ],
                {cancelable: false},
            );
        } catch (err) {
            console.log(err);
            Alert.alert('Registro', err, [{text: 'Ok :('}], {
                cancelable: false,
            });
        }
    }

    return (
        <Background>
            <LogoText>MERX</LogoText>
            <Subtitle>registro</Subtitle>
            <Form>
                <Input
                    placeholder="nome de usuário"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handleUsername(text)}
                />
                <Input
                    placeholder="nome completo"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handleFullName(text)}
                />
                <Input
                    placeholder="e-mail"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handleEmail(text)}
                />
                <Input
                    placeholder="celular"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handlePhone(text)}
                />
                <Input
                    placeholder="cpf"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handleCPF(text)}
                />
                <Input
                    placeholder="data de nasc."
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handleBirthdate(text)}
                />
                <Input
                    placeholder="senha"
                    placeholderTextColor="#c59e00"
                    onChangeText={(text) => handlePassword(text)}
                />
            </Form>
            <EnterButton
                title="Entrar"
                color="#C59E00"
                onPress={() => SignUp()}
            />
        </Background>
    );
}
