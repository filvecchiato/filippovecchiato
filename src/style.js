import styled from 'styled-components';
import { colours } from './global-styles';


export const App = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
`;

export const Header  =styled.header`
    height: 60px;
    width: 100%;
`;

export const Content = styled.div`
    height: calc(100% - 60px);
    width: 100%;
    vertical-align: middle;
    p{
        margin: auto;
        width: fit-content;
        height: 20px;
        font-size: 18px;
        color: ${colours.white01};
    }
    h1{
        margin: auto;
        width: fit-content; 
    }
`;