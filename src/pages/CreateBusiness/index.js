import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {set} from 'date-fns';
import {
    BusinessIcon,
    FeedbackText,
    FeedbackContainer,
    ButtonContainer,
    ButtonText,
} from './styles';

import {
    Background,
    Header,
    Form,
    Input,
    BackButton,
    BackButtonImg,
} from '../globalStyles';
import BackArrow from '../../images/backarrow.png';
import api from '../../services/api';

import ShoppingCart from '../../images/shoppingcart.png';

export default function CreateBusiness({navigation}) {
    const [businessName, setBusinessName] = useState('');
    const [businessCNPJ, setBusinessCNPJ] = useState('');

    async function CreateB() {
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

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg resizeMode="contain" source={BackArrow} />
                </BackButton>
            </Header>
            <FeedbackContainer>
                <BusinessIcon source={ShoppingCart} />
                <Form>
                    <Input
                        placeholder="nome do seu negócio"
                        placeholderTextColor="#c59e0090"
                        onChangeText={(text) => setBusinessName(text)}
                    />
                    <Input
                        placeholder="cnpj"
                        placeholderTextColor="#c59e0090"
                        onChangeText={(text) => setBusinessCNPJ(text)}
                    />
                </Form>
                <ButtonContainer
                    onPress={() =>
                        navigation.push('Business', {
                            businessName,
                            businessCNPJ,
                        })
                    }>
                    <ButtonText>Criar</ButtonText>
                </ButtonContainer>
            </FeedbackContainer>
        </Background>
    );
}
