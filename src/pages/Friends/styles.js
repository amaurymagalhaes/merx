import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const FindBar = styled.View`
    background-color: #0d0d0d;
    width: 90%;
    border-radius: 25px;
    align-self: center;
    padding-left: 2%;
    padding-right: 2%;
`;

export const FindText = styled.TextInput`
    color: #fbe5e7;
    font-size: 20px;
`;

export const List = styled.FlatList``;

export const UserBackground = styled.View`
    background-color: #0d0d0d;
    flex: 1;
`;

export const RedButton = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: red;
    border-radius: 50px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    width: 50%;
    margin-top: 1%;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const RedButtonText = styled.Text`
    color: whitesmoke;
    font-size: 23px;
    text-align: center;
`;
