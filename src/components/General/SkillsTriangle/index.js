import React from 'react';
import useWindowSize from '../../../Utilities/hooks/windowSize';
import * as S from './style.js';
import Triangle from '../../../assets/svgs/innerTriangle.svg';
// import {WrappedTransition} from '../WrappedTransition';
import {NavLink} from 'react-router-dom';
const SkillsTriangle = props => {
    const {width} = useWindowSize();
    return (
        <S.TriangleContainer id="skills-triangle-container">
            <S.Triangle src={Triangle} alt="triangleSkills" id="triangle-svg"/>
            <S.SkillsButton
                id="button skill"
                top="calc(17% + 20px)"
                left="calc(50% - 10px)"
                rotation="55.3deg"
            >
                <NavLink to={'/work'}> {width<=400 ? 'Development':'Software Development'} </NavLink>
            </S.SkillsButton>
            <S.SkillsButton
                id="button skill"
                top="calc(57% - 10px)"
                left="25%"
                rotation="0deg"
            >
                <NavLink to={'/work'}> {width<=400? 'Deep Drive':'Market Deep Drive'} </NavLink>
            </S.SkillsButton>
            <S.SkillsButton
                id="button skill"
                top="calc(17% + 20px)"
                left="calc(0% + 10px)"
                rotation="-55.3deg"
            >
                <NavLink to={'/work'}> {width<=400? 'Engineered':'Engineered Process'}</NavLink>
            </S.SkillsButton>
        </S.TriangleContainer>
    );
};
export default SkillsTriangle;