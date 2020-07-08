import styled from 'styled-components/native';

export const Box = styled.View`
    background-color: #0d0d0d;
    width: 85%;
    height: 80px;
    margin-top: 30px;
    border-radius: 25px;
    align-self: center;
`;

export const BoxContainer = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const UserImage = styled.View`
    background-color: whitesmoke;
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin-right: 20px;
`;

export const TextName = styled.Text`
    font-size: 25px;
    color: #fbe5e7;
`;

export const TextUsername = styled.Text`
    font-size: 20px;
    color: #fbe5e7;
`;

export const TextContainer = styled.View`
    flex-direction: column;
`;
