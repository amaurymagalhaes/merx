import React from 'react';

import {
    Box,
    UserImage,
    BoxContainer,
    TextName,
    TextUsername,
    TextContainer,
} from './styles';

export default function Friend({data}) {
    console.log(data);
    return (
        <Box>
            <BoxContainer>
                <UserImage />
                <TextContainer>
                    <TextName>{data.name}</TextName>
                    <TextUsername>@{data.username}</TextUsername>
                </TextContainer>
            </BoxContainer>
        </Box>
    );
}
