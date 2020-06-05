import React from 'react';
import * as S from './style';
import {NavigationItems} from '../NavigationItems';

const Toolbar = props => {
    return (
        <S.Container>
            <div>
                logo
            </div>
            <NavigationItems/>
        </S.Container>
    )
}

export default Toolbar;