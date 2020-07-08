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
    RedButton,
    RedButtonText,
} from './styles';

export default function CardUser({data, isSelected, navigation}) {
    const [isSelectedCard, setSelected] = useState(isSelected);

    function addUser() {}

    return (
        <Box>
            <BoxContainer>
                <UserImage />
                <TextContainer>
                    <TextName>{data.name}</TextName>
                    <TextUsername>@{data.username}</TextUsername>
                </TextContainer>
                <ButtonContainer>
                    <LightYellowButton>
                        <ButtonText>Adicionar usuário</ButtonText>
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
