import React, {useState, useEffect} from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import api from '../../services/api';

import {Header, BackButton, BackButtonImg} from '../globalStyles';

import {
    Background,
    QRCodeBox,
    ButtonQRYellow,
    ButtonQRYellowText,
    ButtonQRBlack,
    ButtonQRBlackText,
    ButtonBox,
} from './styles';

import BackArrow from '../../images/backarrow.png';

export default function QRCodePage({navigation}) {
    const [isReading, setIsReading] = useState(false);
    const [user, setUser] = useState(null);

    async function getUser(dataToGet) {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const userGot = await api.get(
                `/user/byUsername/${dataToGet}`,
                config,
            );
            setUser(userGot.data);
        } catch (err) {
            console.log(err);
        }
        // setBalance(partialBalance);
    }

    function checkIf() {
        if (isReading) {
            return renderQRReading();
        }
        return renderQRGenerate();
    }

    function ReadingQR(readedData) {
        // getUser(readedData);
        navigation.push('Payment', {
            data: {id: 1, name: 'Lucas Kzan', username: 'lucaskzan'},
        });
    }

    function renderQRReading() {
        return (
            <QRCodeBox>
                <QRCodeScanner
                    onRead={(e) => ReadingQR(e)}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                />
            </QRCodeBox>
        );
    }
    function renderQRGenerate() {
        return (
            <QRCodeBox>
                <QRCode
                    color="#f2ca50"
                    backgroundColor="#1e1e1e"
                    size={200}
                    value="kzan"
                />
            </QRCodeBox>
        );
    }

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg resizeMode="contain" source={BackArrow} />
                </BackButton>
            </Header>
            {checkIf()}
            <ButtonBox>
                <ButtonQRBlack onPress={() => setIsReading(false)}>
                    <ButtonQRBlackText>Gerar QR</ButtonQRBlackText>
                </ButtonQRBlack>
                <ButtonQRYellow onPress={() => setIsReading(true)}>
                    <ButtonQRYellowText>Leitura</ButtonQRYellowText>
                </ButtonQRYellow>
            </ButtonBox>
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
