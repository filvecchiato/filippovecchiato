import React from 'react';
import * as S from './style';
import Button from '../Button';
const NoMatch = props => (
    <S.Content> 
        <S.Title>
            Oops, I can't find the page you are looking for!
        </S.Title>
        <S.Text> Please go back to the homepage! </S.Text>
        <Button onClick={()=>props.history.replace('/home')}> Home</Button>
    </S.Content>
);

export default NoMatch;