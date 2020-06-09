import styled, {css} from 'styled-components';
import {colours} from '../../../global-styles';

export const Container = styled.div`
    position: absolute;
    background: transparent;
    border: unset;
    color: ${colours.green01};
    
    ${ props=> props.location==="/home" ? 
        css`
            position: unset;
            display:flex;
            flex-direction: row;
        `
        :
        css`
            bottom: 15px;
            right: 15px;
            display:flex;
            flex-direction: column;
        `
    }
`;