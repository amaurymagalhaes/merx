import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {format, addDays} from 'date-fns';
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
    YellowButton,
    ButtonText,
} from './styles';

import BackArrow from '../../images/backarrow.png';
import ProfileIcon from '../../images/perfilphoto.jpg';
import QRCode from '../QRCode';

export default function Profile({navigation}) {
    const [userInfos, setUserInfos] = useState([]);

    async function getInfosFromStorage() {
        try {
            const username = await AsyncStorage.getItem('Username');
            const cpf = await AsyncStorage.getItem('UserCPF');
            const name = await AsyncStorage.getItem('NameUser');
            const email = await AsyncStorage.getItem('UserEmail');
            const phone = await AsyncStorage.getItem('UserPhone');
            const birthdate = format(
                new Date(await AsyncStorage.getItem('UserBirthdate')),
                'dd/MM/yyyy',
            );
            const infos = {
                username,
                name,
                email,
                phone,
                cpf,
                birthdate,
            };
            console.log(infos);
            setUserInfos(infos);
        } catch (_err) {
            console.log(_err);
        }
    }

    useEffect(() => {
        getInfosFromStorage();
    }, []);

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg resizeMode="contain" source={BackArrow} />
                </BackButton>
            </Header>
            <UserBox>
                <ProfileBox>
                    <ProfileImage source={ProfileIcon} />
                    <ProfileUser>@{userInfos.username}</ProfileUser>
                </ProfileBox>
                <FieldsBox>
                    <ProfileTextField>nome</ProfileTextField>
                    <ProfileTextFromUser>{userInfos.name}</ProfileTextFromUser>
                </FieldsBox>
                <FieldsBox>
                    <ProfileTextField>e-mail</ProfileTextField>
                    <ProfileTextFromUser>{userInfos.email}</ProfileTextFromUser>
                </FieldsBox>
                <FieldsBox>
                    <ProfileTextField>celular</ProfileTextField>
                    <ProfileTextFromUser>{userInfos.phone}</ProfileTextFromUser>
                </FieldsBox>
                <FieldsBox>
                    <ProfileTextField>cpf</ProfileTextField>
                    <ProfileTextFromUser>{userInfos.cpf}</ProfileTextFromUser>
                </FieldsBox>
                <FieldsBox>
                    <ProfileTextField>celular</ProfileTextField>
                    <ProfileTextFromUser>
                        {userInfos.birthdate}
                    </ProfileTextFromUser>
                </FieldsBox>
            </UserBox>
            <YellowButton onPress={() => navigation.push('QRCode')}>
                <ButtonText>Gerar QR Code</ButtonText>
            </YellowButton>
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
