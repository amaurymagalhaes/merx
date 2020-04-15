import styled from 'styled-components/native';

export const Background = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #1e1e1e;
    justify-content: flex-end;
`;

export const LogoText = styled.Text`
    color: #c59e00;
    font-size: 42px;
    text-align: center;
    padding: 5%;
`;

export const Subtitle = styled.Text`
    color: #f4dee0;
    font-size: 32px;
    text-align: center;
    padding: 4%;
`;

export const Form = styled.View`
    padding-left: 20%;
    padding-right: 20%;
`;

export const Input = styled.TextInput`
    margin-bottom: 5%;
    font-size: 16px;
    border: 1px #f2ca50;
    color: #c59e00;
    &::placeholder {
        color: #c59e00;
    }
`;

export const EnterButton = styled.Button``;
