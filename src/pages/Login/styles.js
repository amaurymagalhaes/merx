import styled from 'styled-components/native';

export const Background = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #1e1e1e;
`;

export const LogoText = styled.Text`
    color: #c59e00;
    font-size: 42px;
    text-align: center;
    padding: 10%;
`;

export const Subtitle = styled.Text`
    color: #f4dee0;
    font-size: 32px;
    text-align: center;
    padding: 4%;
`;

export const Form = styled.View`
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
`;

export const Input = styled.TextInput`
    margin-bottom: 10%;
    font-size: 20px;
    color: #c59e00;
    border: 1px solid orange;
    padding-left: 5px;
    &::placeholder {
        color: #c59e00;
    }
`;

export const EnterButton = styled.TouchableOpacity`
    background-color: #c59e00;
    width: 150px;
    height: 40px;
    align-self: center;
    margin-bottom: 10px;
    justify-content: center;
    border-radius: 25px;
`;

export const RegisterButton = styled.TouchableOpacity`
    height: 40px;
    align-self: center;
    margin-top: 20px;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;
`;

export const RegisterText = styled.Text`
    color: #c59e00;
    font-size: 21px;
    text-align: center;
`;

export const RegisterText2 = styled.Text`
    color: white;
    font-size: 21px;
    text-align: center;
`;
