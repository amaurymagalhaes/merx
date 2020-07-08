import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {TouchableOpacity, View} from 'react-native';
import Friend from '../../components/Friend';
import CardUser from '../../components/CardUser';

import api from '../../services/api';
import {
    Header,
    FindBar,
    FindText,
    BackButton,
    BackButtonImg,
} from '../globalStyles';

import {Background, RedButton, RedButtonText} from './styles';

import BackArrow from '../../images/backarrow.png';

export default function Friends({navigation}) {
    const [FriendList, setFriendList] = useState([]);
    const [SearchedUser, setSearchedUser] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    function handleSearch(text) {
        setSearchedUser(text);
        console.log(FriendList);
    }

    async function handleList() {
        try {
            const token = await AsyncStorage.getItem('Token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.get(
                `/user/byUsername/${SearchedUser}`,
                config,
            );
            console.log(response.data);
            setFriendList(response.data);
        } catch (err) {
            console.log(err);
            setFriendList([]);
        }
    }

    useEffect(() => {
        handleList();
    }, [SearchedUser]);

    useEffect(() => {
        console.log(FriendList.name);
        console.log(isSelected);
    }, [FriendList]);

    function checkWhatScreen() {
        if (FriendList.length !== 0 && isSelected === false) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        setIsSelected(true);
                    }}>
                    <Friend data={FriendList} />
                </TouchableOpacity>
            );
        }
        if (FriendList.length !== 0 && isSelected === true) {
            return (
                <View>
                    <CardUser data={FriendList} navigation={navigation} />
                    <RedButton
                        onPress={() => {
                            setIsSelected(false);
                        }}>
                        <RedButtonText>Fechar</RedButtonText>
                    </RedButton>
                </View>
            );
        }
        return null;
    }

    return (
        <Background>
            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonImg source={BackArrow} />
                </BackButton>
            </Header>
            <FindBar>
                <FindText
                    placeholder="Procure pelo nome de usuário"
                    placeholderTextColor="#fbe5e7"
                    onChangeText={(e) => handleSearch(e)}
                />
            </FindBar>
            {checkWhatScreen()}
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
