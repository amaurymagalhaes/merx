import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

export const ProfileImage = styled.Image`
    width: 125px;
    height: 125px;
    border-radius: 100px;
    background-color: black;
`;

export const ProfileUser = styled.Text`
    font-size: 25px;
    color: #d9a441;
`;

export const UserBox = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const FieldsBox = styled.View`
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 10px;
`;

export const ProfileBox = styled.View`
    flex-direction: column;
    margin-bottom: 25px;
`;

export const ProfileTextField = styled.Text`
    font-size: 23px;
    color: #f4dee0;
`;
export const ProfileTextFromUser = styled.Text`
    font-size: 20px;
    color: #d9a441;
`;

export const YellowButton = styled.TouchableOpacity`
    background-color: #f2ca50;
    border-radius: 50px;
    height: 40px;
    width: 60%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: #0d0d0d;
    font-size: 20px;
    text-align: center;
`;
