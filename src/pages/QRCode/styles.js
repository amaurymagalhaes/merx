import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const QRCodeBox = styled.View`
    flex-direction: column;
    align-items: center;
    flex: 3;
    justify-content: center;
`;

export const ButtonBox = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin-top: 5%;
    margin-bottom: 5%;
    flex: 1;
`;

export const ButtonQRYellow = styled.TouchableOpacity`
    background-color: #f2ca50;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ButtonQRBlack = styled.TouchableOpacity`
    background-color: black;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
`;

export const ButtonQRYellowText = styled.Text`
    font-size: 22px;
    color: #1e1e1e;
`;

export const ButtonQRBlackText = styled.Text`
    font-size: 22px;
    color: #f2ca50;
`;
