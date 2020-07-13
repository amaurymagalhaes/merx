import React, {useState} from 'react';

import {
    Box,
    UserImage,
    BoxContainer,
    TextName,
    TextUsername,
    TextContainer,
    ButtonContainer,
    LightYellowButton,
    ButtonText,
} from './styles';

export default function CardUser({data, isSelected, navigation}) {
    const [isSelectedCard, setSelected] = useState(isSelected);
    const [isFriend, setIsFriend] = useState(false);

    function addUser() {
        if (!isFriend) {
            setIsFriend(true);
        } else {
            setIsFriend(false);
        }
    }

    function checkUser() {}

    return (
        <Box>
            <BoxContainer>
                <UserImage />
                <TextContainer>
                    <TextName>{data.name}</TextName>
                    <TextUsername>@{data.username}</TextUsername>
                </TextContainer>
                <ButtonContainer>
                    <LightYellowButton
                        onPress={() => addUser()}
                        isFriend={isFriend}>
                        <ButtonText isFriend={isFriend}>
                            {isFriend
                                ? 'Desfazer amizade'
                                : 'Adicionar usuário'}
                        </ButtonText>
                    </LightYellowButton>
                    <LightYellowButton
                        onPress={() => navigation.navigate('Payment', {data})}>
                        <ButtonText>Pagar</ButtonText>
                    </LightYellowButton>
                    <LightYellowButton>
                        <ButtonText>Enviar cobrança</ButtonText>
                    </LightYellowButton>
                </ButtonContainer>
            </BoxContainer>
        </Box>
    );
}
