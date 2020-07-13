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
    BackButton,
    BackButtonImg,
} from '../globalStyles';

import api from '../../services/api';

import BackArrow from '../../images/backarrow.png';
import ShoppingCart from '../../images/shoppingcart.png';

export default function Business({route, navigation}) {
    const [businessName, setBusinessName] = useState('0000');
    const [businessCNPJ, setBusinessCNPJ] = useState('1111');

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

    useEffect(() => {
        getBusiness();
    }, []);

    function getBusiness() {
        if (route.params.businessName && route.params.businessCNPJ) {
            setBusinessName(route.params.businessName);
            setBusinessCNPJ(route.params.businessCNPJ);
        } else {
            setBusinessName(null);
            setBusinessCNPJ(null);
        }
    }

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.navigate('Menu')}>
                    <BackButtonImg resizeMode="contain" source={BackArrow} />
                </BackButton>
            </Header>
            <FeedbackContainer>
                <BusinessName>{businessName}</BusinessName>
                <BusinessLogo />
                <CNPJText>{businessCNPJ}</CNPJText>
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
        </Background>
    );
}
