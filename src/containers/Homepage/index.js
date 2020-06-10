import React from 'react';
import * as S from './style';
import TriangleSkills from '../../components/General/SkillsTriangle';

export default class Homepage extends React.Component{
    state={
        text1: false,
        text2: false,
        text3:false
    }
    setOpen=field=>{
        this.setState({[field]: true})
    };

    componentDidMount(){
        this.setOpen('text1')
    }
    // A Software Developer, focused on Frontend Development
    // An Engineer, specialised in Data Driven Disruption
    // A Consultant, Goal-oriented with an Eye for Detail
    render(){
        return (
            <S.Content>
                <S.TextSt>
                    <h1>I architect and build webapps</h1> 
                    <h1>Each webapp is aimed at optimising the industry.</h1>
                    
                    <p>Deep drive investigation</p>
                    <p>Engineered development</p>
                    <p>Industry Disruption</p>
                </S.TextSt>
                <S.FeaturedBlock>
                    <TriangleSkills/>
                </S.FeaturedBlock>
            </S.Content>
        );
    };
};
