import styled from 'styled-components';
import {colours} from '../../../global-styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px;
`;

export const Name = styled.h1`
    letter-spacing: 3px;
    font-size: 25px;
    font-style: italic;
    color: ${colours.highlights};
`;

export const NameContainer = styled.button`
    margin: 2px 10px;
    height: calc(100% - 20px);
    text-align: left;
    &:hover{
        border-bottom: 1px solid ${colours.highlights};
    }
`;