/* eslint-disable camelcase */
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, Keyboard} from 'react-native';

import Friend from '../../components/Friend';

import api from '../../services/api';

import {
    Background,
    PageTitle,
    PropertiesShelf,
    QuantityInput,
    SendButton,
    ButtonText,
    PropertyText,
    ExitTouchable,
    ExitImage,
    TextnExitContainer,
} from './styles';
import {
    Header,
    FindBar,
    FindText,
    BackButton,
    BackButtonImg,
} from '../globalStyles';

import BackArrow from '../../images/backarrow.png';

import XMark from '../../images/xmark.png';

export default function Payment({route, navigation}) {
    const [amount, SetAmount] = useState();
    const [dataDestinated, setData] = useState();
    const [destiny_id, setId] = useState();

    function checkUser() {
        if (route.params.data && route.params.data.id) {
            setData(route.params.data);
            setId(route.params.data.id);
        }
    }

    function handleAmount(quantity) {
        SetAmount(quantity);
    }

    useEffect(() => {
        checkUser();
    }, []);

    async function doTransaction() {
        try {
            Keyboard.dismiss();
            const token = await AsyncStorage.getItem('Token');
            const source_id = (await AsyncStorage.getItem('UserId')).toString();
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            await api.post(
                '/transaction',
                {
                    amount,
                    source_id,
                    destiny_id,
                },
                config,
            );
            Alert.alert(
                'Transação',
                'Transação foi realizada com sucesso.',
                [
                    {
                        text: 'Ótimo! :)',
                        onPress: () => {
                            navigation.push('Balance');
                        },
                    },
                ],
                {cancelable: false},
            );
        } catch (err) {
            console.log(err);
        }
    }

    function CancelUser() {
        navigation.push('Friends');
    }

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg source={BackArrow} />
                </BackButton>
            </Header>
            <PageTitle>Quanto você deseja enviar?</PageTitle>

            <TextnExitContainer>
                <Friend data={route.params.data} />
                <ExitTouchable onPress={() => CancelUser()}>
                    <ExitImage resizeMode="cover" source={XMark} />
                </ExitTouchable>
            </TextnExitContainer>

            <PropertiesShelf>
                <PropertyText>quantidade</PropertyText>
                <QuantityInput
                    placeholder="R$ 0,00"
                    placeholderTextColor="#FBE5E7"
                    onChangeText={(e) => handleAmount(e)}
                />
                <SendButton
                    onPress={() => {
                        doTransaction();
                    }}>
                    <ButtonText>Enviar</ButtonText>
                </SendButton>
            </PropertiesShelf>
        </Background>
    );
}
