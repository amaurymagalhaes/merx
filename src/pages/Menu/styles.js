import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const LogoFont = styled.Text`
    color: #c59e00;
    font-size: 60px;
    width: 100%;
    height: 100px;
    text-align: center;
`;

export const ItemsShelf = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ItemsCase = styled.View`
    flex-direction: row;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 3%;
    margin-bottom: 3%;
`;

export const ItemBox = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
`;

export const ItemBackground = styled.View`
    background-color: #0d0d0d;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemImage = styled.Image`
    width: 40px;
    height: 40px;
`;

export const ItemName = styled.Text`
    color: #ffcc00;
    font-size: 22px;
`;
