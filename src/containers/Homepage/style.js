import styled from 'styled-components';

import {colours} from '../../global-styles';

export const Content = styled.div`
    margin: auto;
    
`;

export const TextSt = styled.div`
    font-size: 24px;
    color: ${colours.grey02};
    margin: 0;
    padding: 5px;
    @media(max-width: 800px){
        font-size: 14px;
    };
`;