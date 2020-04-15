import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const BalanceContainer = styled.View`
    height: 23%;
    background-color: #ffffff;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const BalanceText = styled.Text`
    font-size: 25px;
    color: #fbe5e7;
`;
export const BalanceMoneyText = styled.Text`
    font-size: 40px;
    color: #ffcc00;
`;

export const TransactionsContainer = styled.View`
    background-color: #ff2312;
    height: 69%;
    width: 100%;
`;

export const TransactionShelf = styled.View`
    flex: 1;
`;

export const DateText = styled.Text`
    color: #d9a441;
    font-size: 30px;
`;

export const List = styled.FlatList`
    background-color: blue;
`;
export const TransactionBox = styled.View`
    background-color: #0d0d0d;
    padding-left: 5%;
    padding-right: 3%;
    width: 96%;
    height: 13%;
    border-radius: 25px;
    align-self: center;
    flex-direction: row;
    align-items: center;
`;

export const TransactionDirectionIcon = styled.View`
    background-color: ${(props) =>
        props.direction === 'in' ? '#25C200' : '#C20000'};
    width: 6%;
    height: 10px;
    margin-right: 4%;
`;

export const TransactionTextContainer = styled.View`
    height: 100%;
    width: 60%;
`;

export const TransactionTextName = styled.Text`
    color: #ffcc00;
    font-size: 22px;
`;

export const TransactionTextTime = styled.Text`
    color: #f4dee0;
    font-size: 18px;
`;

export const MoneyText = styled.Text`
    width: 30%;
    font-size: 22px;
    color: ${(props) => (props.direction === 'in' ? '#25C200' : '#C20000')};
`;
