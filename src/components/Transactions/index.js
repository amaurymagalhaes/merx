import React, {useMemo, useEffect, useState} from 'react';

import {parseISO, formatDistance} from 'date-fns';
import AsyncStorage from '@react-native-community/async-storage';

import pt from 'date-fns/locale/pt';
import {
    TransactionBox,
    TransactionDirectionIcon,
    TransactionTextName,
    TransactionTextTime,
    TransactionTextContainer,
    MoneyText,
} from './styles';

import api from '../../services/api';

export default function Transactions({data}) {
    const [name, setName] = useState([]);
    const [direction, setDirection] = useState();

    const dateParsed = useMemo(() => {
        return formatDistance(parseISO(data.createdAt), new Date(), {
            locale: pt,
            addSufix: true,
        });
    }, [data.createdAt]);

    function checkID(transaction, idToCheck) {
        const sourceId = parseInt(transaction.source_id, 10);
        const idToCompare = parseInt(idToCheck, 10);
        if (sourceId === idToCompare) {
            setDirection('out');
            return transaction.destiny_id;
        }
        setDirection('in');
        return transaction.source_id;
    }

    async function getUserTransaction() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const userId = await AsyncStorage.getItem('UserId');
            const idToUse = checkID(data, userId);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.get(`/user/byId/${idToUse}`, config);
            setName(response.data.name);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserTransaction();
    }, []);

    return (
        <TransactionBox>
            <TransactionDirectionIcon direction={direction} />
            <TransactionTextContainer>
                <TransactionTextName>{name}</TransactionTextName>
                <TransactionTextTime>Há {dateParsed}</TransactionTextTime>
            </TransactionTextContainer>
            <MoneyText direction={direction}>
                {direction === 'in' ? '+' : '-'} R$ {data.amount}
            </MoneyText>
        </TransactionBox>
    );
}
