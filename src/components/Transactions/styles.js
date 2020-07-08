import styled from 'styled-components/native';

export const TransactionBox = styled.View`
    background-color: #0d0d0d;
    padding-left: 5%;
    flex: 1;
    padding-right: 3%;
    width: 96%;
    height: 60px;
    border-radius: 25px;
    align-self: center;
    flex-direction: row;
    align-items: center;
    margin-top: 1%;
    margin-bottom: 1%;
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
    font-size: 16px;
`;

export const MoneyText = styled.Text`
    width: 30%;
    font-size: 22px;
    color: ${(props) => (props.direction === 'in' ? '#25C200' : '#C20000')};
`;
