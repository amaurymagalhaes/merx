import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    BusinessIcon,
    FeedbackText,
    FeedbackContainer,
    ButtonContainer,
    ButtonText,
} from './styles';

import {Background, Header, Form, Input} from '../globalStyles';
import api from '../../services/api';

import ShoppingCart from '../../images/shoppingcart.png';

export default function CreateBusiness() {
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
            <Header />
            <FeedbackContainer>
                <BusinessIcon source={ShoppingCart} />
                <Form>
                    <Input
                        placeholder="nome do seu negócio"
                        placeholderTextColor="#c59e0090"
                        onChangeText={(text) => handleUsername(text)}
                    />
                    <Input
                        placeholder="cnpj"
                        placeholderTextColor="#c59e0090"
                        onChangeText={(text) => handleUsername(text)}
                    />
                </Form>
                <ButtonContainer>
                    <ButtonText>Criar</ButtonText>
                </ButtonContainer>
            </FeedbackContainer>
        </Background>
    );
}
