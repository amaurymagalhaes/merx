import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    BusinessIcon,
    FeedbackText,
    FeedbackContainer,
    BusinessName,
    BusinessLogo,
    CNPJText,
    ExcludeText,
    RedButton,
} from './styles';

import {
    Background,
    Header,
    LightYellowButton,
    ButtonText,
} from '../globalStyles';
import api from '../../services/api';

import ShoppingCart from '../../images/shoppingcart.png';

export default function Business({navigation}) {
    const [business, setBusiness] = useState('Midas');

    async function checkBusiness() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.get('/transactions', config);
        } catch (err) {}
    }

    function renderWithoutBusiness() {
        return (
            <FeedbackContainer>
                <BusinessName>Midas</BusinessName>
                <BusinessLogo />
                <CNPJText>23.213.361/0001-11</CNPJText>
                <LightYellowButton
                    onPress={() => navigation.navigate('CreateBusiness')}>
                    <ButtonText>Pagar</ButtonText>
                </LightYellowButton>
                <LightYellowButton
                    onPress={() => navigation.navigate('CreateBusiness')}>
                    <ButtonText>Receber</ButtonText>
                </LightYellowButton>
                <LightYellowButton
                    onPress={() => navigation.navigate('CreateBusiness')}>
                    <ButtonText>Enviar Cobrança</ButtonText>
                </LightYellowButton>
                <RedButton
                    onPress={() => navigation.navigate('CreateBusiness')}>
                    <ExcludeText>Excluir negócio</ExcludeText>
                </RedButton>
            </FeedbackContainer>
        );
    }

    function renderWithBusiness() {
        return (
            <FeedbackContainer>
                <BusinessIcon source={ShoppingCart} />
                <FeedbackText>
                    Você quer criar seu negócio ou já tem um mas quer pagar
                    menos taxas? Nós te ajudamos!
                </FeedbackText>
                <LightYellowButton
                    onPress={() => navigation.navigate('CreateBusiness')}>
                    <ButtonText>Criar seu negócio</ButtonText>
                </LightYellowButton>
            </FeedbackContainer>
        );
    }

    return (
        <Background>
            <Header />
            {business ? renderWithoutBusiness() : renderWithBusiness()}
        </Background>
    );
}
