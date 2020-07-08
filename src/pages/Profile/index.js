import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import {Header, BackButton, BackButtonImg} from '../globalStyles';

import {
    Background,
    ProfileBox,
    ProfileImage,
    ProfileTextField,
    ProfileTextFromUser,
    ProfileUser,
    UserBox,
    FieldsBox,
} from './styles';

import BackArrow from '../../images/backarrow.png';

export default function Profile({navigation}) {
    const [FriendList, setFriendList] = useState([]);

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg source={BackArrow} />
                </BackButton>
            </Header>
            <UserBox>
                <ProfileBox>
                    <ProfileImage />
                    <ProfileUser />
                </ProfileBox>
                <FieldsBox>
                    <ProfileTextField>a</ProfileTextField>
                    <ProfileTextFromUser>B</ProfileTextFromUser>
                </FieldsBox>
            </UserBox>
        </Background>
    );
}

/*

<List
    data={FriendList}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => <Friend data={item} />}
/>
*/
