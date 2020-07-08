import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    Background,
    MenuButton,
    List,
    TransactionsContainer,
    BalanceContainer,
    BalanceMoneyText,
    BalanceText,
    DateText,
    TransactionShelf,
} from './styles';
import {Header} from '../globalStyles';

import api from '../../services/api';
import Transactions from '../../components/Transactions';

export default function Balance({navigation}) {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState([]);

    async function checkTransactions() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.get('/transactions', config);
            const filteredResponse = response.data.sort(function sortData(
                a,
                b,
            ) {
                const c = new Date(a.createdAt);
                const d = new Date(b.createdAt);
                return d - c;
            });
            setTransactions(filteredResponse);
            console.log('A');
        } catch (err) {
            console.log(err);
        }
    }

    async function getBalance() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const userid = (await AsyncStorage.getItem('UserId')).toString();
            const balanceGot = await api.get(`/balance/${userid}`, config);
            setBalance(balanceGot.data.amount);
        } catch (err) {
            console.log(err);
        }
        // setBalance(partialBalance);
    }

    useEffect(() => {
        getBalance();
        checkTransactions();
    }, []);

    return (
        <Background>
            <Header>
                <MenuButton onPress={() => navigation.navigate('Menu')} />
            </Header>
            <BalanceContainer>
                <BalanceText>Saldo</BalanceText>
                <BalanceMoneyText>R$ {balance}</BalanceMoneyText>
            </BalanceContainer>
            <TransactionsContainer>
                <TransactionShelf>
                    <DateText>Extrato</DateText>
                    <List
                        data={transactions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Transactions data={item} />}
                    />
                </TransactionShelf>
            </TransactionsContainer>
        </Background>
    );
}
