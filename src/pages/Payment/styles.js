import styled from 'styled-components/native';

export const Background = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #1e1e1e;
`;

export const PageTitle = styled.Text`
    color: #fbe5e7;
    font-size: 30px;
    text-align: center;
`;

export const PropertiesShelf = styled.View`
    flex: 1;
    margin-top: 5%;
    align-items: flex-end;
`;
export const QuantityInput = styled.TextInput`
    height: 50px;
    background-color: #0d0d0d;
    font-size: 25px;
    color: #fbe5e7;
    border-radius: 10px;
`;

export const PropertyText = styled.Text`
    color: #fbe5e7;
    font-size: 20px;
`;

export const SendButton = styled.TouchableOpacity`
    background-color: #ffcc00;
    border-radius: 50px;
    height: 50px;
    width: 60%;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

export const ButtonText = styled.Text`
    color: #0d0d0d;
    font-size: 25px;
    text-align: center;
`;

export const ExitTouchable = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    align-self: center;
`;

export const ExitImage = styled.Image`
    width: 50px;
    height: 50px;
`;

export const TextnExitContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
