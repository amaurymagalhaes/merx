import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text} from 'react-native';
import {
    Background,
    List,
    TransactionsContainer,
    BalanceContainer,
    BalanceMoneyText,
    BalanceText,
    DateText,
    TransactionBox,
    TransactionShelf,
    TransactionDirectionIcon,
    TransactionTextName,
    TransactionTextTime,
    TransactionTextContainer,
    MoneyText,
} from './styles';
import {Header} from '../globalStyles';

import api from '../../services/api';

export default function Balance() {
    const [transactions, setTransactions] = useState([]);

    async function checkTransactions() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.get('/transactions', config);
            setTransactions(response.data);
            console.log(transactions);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        checkTransactions();
    }, []);

    return (
        <Background>
            <Header />
            <BalanceContainer>
                <BalanceText>Saldo</BalanceText>
                <BalanceMoneyText>R$</BalanceMoneyText>
            </BalanceContainer>
            <TransactionsContainer>
                <TransactionShelf>
                    <DateText>Extrato</DateText>
                    <TransactionBox>
                        <TransactionDirectionIcon />
                        <TransactionTextContainer>
                            <TransactionTextName>Nome</TransactionTextName>
                            <TransactionTextTime>Faz tempo</TransactionTextTime>
                        </TransactionTextContainer>
                        <MoneyText>-R$ 10,99</MoneyText>
                    </TransactionBox>
                    <List
                        data={transactions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <TransactionBox>
                                <TransactionDirectionIcon />
                                <TransactionTextContainer>
                                    <TransactionTextName>
                                        Nome
                                    </TransactionTextName>
                                    <TransactionTextTime>
                                        Faz tempo
                                    </TransactionTextTime>
                                </TransactionTextContainer>
                                <MoneyText>-R$ 10,99</MoneyText>
                            </TransactionBox>
                        )}
                    />
                </TransactionShelf>
            </TransactionsContainer>
        </Background>
    );
}
