import styled from 'styled-components';
import {colours} from '../../../global-styles';

export const TriangleContainer = styled.div`
    height: 80vh;
    width: 80vh;
    margin: auto;
`;

export const InnerTriangle = styled.div`
    height: 50vh;
    width:  50vh;
`;

export const OuterTriangle = styled.div`
    width: 100%;
    height: 100%;
`;

export const LeftButton = styled.div`
    position: relative;
    width: 500px;
    height: 80px;   
    transform: rotate(-55.3deg);
    top: -617px;
    left: -57px;
    justify-content:center;
    a {
        text-decoration: unset;
        font-size: 40px;
        z-index: 2;
        margin: 0 120px;
        color: ${colours.white01};
        &:hover{
            color: ${colours.highlights}
        }
    }
`;

export const RightButton = styled.div`
    width: 500px;
    height: 80px;
    position: relative;
    font-size: 40px;
    top: -536px;
    left: 305px;
    transform: rotate(55.3deg);
    justify-content:center;
    a{
        text-decoration: unset;
        font-size: 40px;
        z-index: 2;
        margin: 0 150px;
        color: ${colours.white01};
        &:hover{
            color: ${colours.highlights}
        }
    }
`;

export const BottomButton = styled.div`
    width: 500px;
    height: 80px;
    position: relative;
    font-size: 40px;
    top: -166px;
    left: 125px;
    justify-content:center;
    a {
        text-decoration: unset;
        font-size: 40px;
        z-index: 2;
        margin: 0 135px;
        color: ${colours.white01};
        &:hover{
            color: ${colours.highlights}
        }
    }
`;
