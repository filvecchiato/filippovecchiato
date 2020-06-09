import React from 'react';
import * as S from './style';
import {NavigationItems} from '../NavigationItems';
import {SocialLinks} from '../SocialLinks';

const Toolbar = props => {
    console.log(props)
    return (
        <S.Container>
            {props.location !=="/home" &&
                <NavigationItems/>
            }
            {props.location ==="/home" &&
                <React.Fragment>
                    <S.Name> Filippo Vecchiato </S.Name>
                    <SocialLinks location={props.location}/>
                </React.Fragment>
            }
        </S.Container>
    )
}

export default Toolbar;