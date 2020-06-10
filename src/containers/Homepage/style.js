import styled from 'styled-components';

import {colours} from '../../global-styles';

export const Content = styled.div`
    margin: auto;
`;
export const FeaturedBlock = styled.div`
    position: absolute;
    bottom: 5%;
    left: 10%;
    background-color: ${colours.black};
    padding: 20px;
    width: 40vw;
    height: 40vw;
    min-width: 300px;
    min-height: 300px;
    max-height: 550px;
    max-width: 550px;
    @media(max-width: 400px){
        bottom: 50px;
        left: 0px;
        width: calc(100vw - 20px);
        height: calc(100vw - 20px);

    }
`;

export const TextSt = styled.div`
    /* background-color: ${colours.black}; */
    font-size: 24px;
    color: ${colours.grey02};
    position: absolute;
    width: 50%;
    z-index: 3;
    height: fit-content;
    top: 20%;
    right: 5%;
    margin: 0;
    padding: 45px;
    @media(max-width: 800px){
        font-size: 14px;
    };
    p{
        margin: 2px 4px;
        font-size: 18px;
        text-align: right;
    }
    h1{
        font-size: 28px;
        margin: 4px;
    }
    h2{
        font-size: 20px;
        text-align: right;

    }
    @media(max-width: 400px){
        top: 90px;
        right: 5px;
        width:calc(100% - 20px);
        padding:5px;
        p{
            font-size: 18px;
        }
        h1{
            font-size: 24px;
        }
    }
`;