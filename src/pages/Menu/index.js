import React from 'react';

import {
    Background,
    LogoFont,
    ItemsShelf,
    ItemsCase,
    ItemBox,
    ItemBackground,
    ItemName,
    ItemImage,
} from './styles';

import {Header} from '../globalStyles';

import BillIcon from '../../images/bill.png';
import CartIcon from '../../images/cart.png';
import FriendsIcon from '../../images/friends.png';
import PaymentIcon from '../../images/payment.png';

export default function Menu({navigation}) {
    return (
        <Background>
            <Header />
            <LogoFont>MERX</LogoFont>
            <ItemsShelf>
                <ItemsCase>
                    <ItemBox onPress={() => navigation.push('Balance')}>
                        <ItemBackground>
                            <ItemImage source={BillIcon} />
                        </ItemBackground>
                        <ItemName>Extrato</ItemName>
                    </ItemBox>
                    <ItemBox onPress={() => navigation.push('Friends')}>
                        <ItemBackground>
                            <ItemImage source={FriendsIcon} />
                        </ItemBackground>
                        <ItemName>Amigos</ItemName>
                    </ItemBox>
                </ItemsCase>
                <ItemsCase>
                    <ItemBox>
                        <ItemBackground>
                            <ItemImage source={PaymentIcon} />
                        </ItemBackground>
                        <ItemName>Pagamentos</ItemName>
                    </ItemBox>
                    <ItemBox onPress={() => navigation.push('Business')}>
                        <ItemBackground>
                            <ItemImage source={CartIcon} />
                        </ItemBackground>
                        <ItemName>Negócios</ItemName>
                    </ItemBox>
                </ItemsCase>
                <ItemsCase>
                    <ItemBox onPress={() => navigation.push('Profile')}>
                        <ItemBackground>
                            <ItemImage source={CartIcon} />
                        </ItemBackground>
                        <ItemName>Perfil</ItemName>
                    </ItemBox>
                </ItemsCase>
            </ItemsShelf>
        </Background>
    );
}
