import styled from 'styled-components/native';

export const Header = styled.View`
    height: 8%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
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

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const Form = styled.View`
    padding-left: 20%;
    padding-right: 20%;
`;

export const Input = styled.TextInput`
    margin-bottom: 5%;
    font-size: 16px;
    border: 1px #f2ca50;
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    color: #c59e00;
    &::placeholder {
        color: #c59e0050;
    }
`;

export const YellowButton = styled.TouchableOpacity`
    background-color: #ffcc00;
    border-radius: 50px;
    height: 50px;
    width: 60%;
    display: flex;
    margin-top: 10%;
    align-items: center;
    justify-content: center;
`;

export const LightYellowButton = styled.TouchableOpacity`
    background-color: #f2ca50;
    border-radius: 50px;
    height: 50px;
    width: 60%;
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #0d0d0d;
    font-size: 25px;
    text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
    margin-top: 20px;
    height: 50px;
    width: 50px;
    align-items: center;
`;

export const BackButtonImg = styled.Image`
    flex: 1;
`;
