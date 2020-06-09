import React from 'react';
import * as S from './style';
// import TriangleSkills from '../../components/General/SkillsTriangle';
import {WrappedTransition} from '../../components/General/WrappedTransition';

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

    render(){
        return (
            <S.Content>
                {/* <TriangleSkills/> */}
                <WrappedTransition
                    timeout={1000}
                    in={this.state.text1}
                    className={'textFadeIn'}
                    onEntering={()=>this.setOpen('text2')}
                >
                    <S.TextSt> A Software Developer, focused on Frontend Development</S.TextSt> 
                </WrappedTransition>
                <WrappedTransition
                    timeout={1500}
                    className={'textFadeIn'}
                    in={this.state.text2}
                    onEntering={()=>this.setOpen('text3')}
                >
                   <S.TextSt> An Engineer, specialised in Data Driven Disruption</S.TextSt>
                </WrappedTransition>
                <WrappedTransition
                    timeout={2000}
                    className={'textFadeIn'}
                    in={this.state.text3}
                >
                  <S.TextSt> A Consultant, Goal-oriented with an Eye for Detail</S.TextSt>
                </WrappedTransition>
                {/* move the triangle in after the text bottom up in transition */}
            </S.Content>
        );
    };
};
