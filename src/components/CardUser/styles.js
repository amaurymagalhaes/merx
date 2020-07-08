import styled from 'styled-components/native';

export const Box = styled.View`
    background-color: #0d0d0d;
    width: 88%;
    height: 75%;
    margin-top: 20px;
    border-radius: 25px;
    align-self: center;
    padding: 5%;
`;

export const BoxContainer = styled.View`
    align-items: center;
    flex-direction: column;
    flex: 1;
`;

export const UserImage = styled.View`
    background-color: whitesmoke;
    width: 150px;
    height: 150px;
    border-radius: 150px;
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
    margin-top: 10px;
    flex-direction: column;
    text-align: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: column;
    flex: 1;
    margin-top: 10px;
`;

export const LightYellowButton = styled.TouchableOpacity`
    background-color: #f2ca50;
    border-radius: 50px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    margin-top: 1%;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #0d0d0d;
    font-size: 23px;
    text-align: center;
`;

export const RedButton = styled.TouchableOpacity`
    background-color: red;
    border-radius: 50px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    margin-top: 1%;
    align-items: center;
    justify-content: center;
`;

export const RedButtonText = styled.Text`
    color: whitesmoke;
    font-size: 23px;
    text-align: center;
`;
