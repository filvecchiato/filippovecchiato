import React from 'react';
// import useWindowSize from '../../../Utilities/hooks/windowSize';
import * as S from './style.js';
import {ReactComponent as InnerTriangle} from '../../../assets/svgs/innerTriangle.svg';
import {WrappedTransition} from '../WrappedTransition';
import {NavLink} from 'react-router-dom';
const SkillsTriangle = props => {
    // const skills = [
    //     {name: "Engineering", page: '/engineering'},
    //     {name: "Consulting", page: '/consulting'},
    //     {name: "Software Dev.", page: '/software-development'},
    // ];
    // const {width} = useWindowSize();
    return (
        <WrappedTransition
            timeout={1000}
            in
            className={'textFadeIn'}
        >
            <S.TriangleContainer>
                <S.OuterTriangle>
                    <InnerTriangle style={{margin: '75px 0'}}/>
                    <S.BottomButton >
                        <NavLink to={'/engineering'}> Engineering </NavLink>
                    </S.BottomButton>
                    <S.RightButton >
                        <NavLink to={'/consulting'}> Consulting </NavLink>
                    </S.RightButton>
                    <S.LeftButton> 
                        <NavLink to={'/projects'}> Software Dev </NavLink>
                    </S.LeftButton>
                </S.OuterTriangle>
            </S.TriangleContainer>
        </WrappedTransition>
    );
};
export default SkillsTriangle;