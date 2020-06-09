import styled from 'styled-components';

import {colours} from '../../../global-styles';


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const Title = styled.h1`
    margin: 30px auto;
    font-size: 30px;
    color: ${colours.white01};
    letter-spacing: 2px;
`;

export const Text = styled.p`
    margin: 20px auto;
    font-size: 20px;
    color: ${colours.white01};
    letter-spacing: 2px;
`;
