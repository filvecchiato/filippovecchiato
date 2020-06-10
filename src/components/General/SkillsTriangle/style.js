import styled from 'styled-components';
import {colours} from '../../../global-styles';

export const TriangleContainer = styled.div`
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    margin: auto;
    position: absolute;
    padding: 20px;
    top: 0px;
    left: 0px;
    @media(max-width:400px){
        padding: 20px 10px;
    };
`;

export const Triangle = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const SkillsButton = styled.div`
    display: flex;
    position: absolute;
    width: 50%;
    height: 50%; 
    top: ${props=>props.top};
    left: ${props=>props.left};
    justify-content:center;
    vertical-align: middle;

    a {
        display: flex;
        width: fit-content;
        height:fit-content;
        text-decoration: unset;
        font-size: calc(120%);
        z-index: 2;
        margin: auto;
        transform: ${props=>props.rotation && `rotate(${props.rotation})`};
        color: ${colours.white01};
        &:hover{
            color: ${colours.green01}
        }
    }
`;

