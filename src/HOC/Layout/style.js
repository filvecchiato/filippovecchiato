import styled from 'styled-components';
// import {colours} from '../../global-styles';

export const Header = styled.header`
    height:  60px;
    width: 100%;
`;

export const Body = styled.div`
    height: calc(100% - 60px);
    width: 100%;
    justify-content: center;
    display: inline-flex;
`;

export const Navigation = styled.div`
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: calc(100% - 60px);
    width: 250px;
    display: flex;
    flex-direction: column;
`;
