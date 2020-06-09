import React from 'react';
import styled from 'styled-components';
import { colours} from '../../../../global-styles';
import {connect} from 'react-redux';
import * as actions from '../../../../Utilities/store/actions';

const ToggleSt = styled.button`
    margin: auto 10px;
    display: flex;
    flex-direction: column;
    width: 40px;
    div{
        background-color: ${colours.highlights};
        width: 100%;
        height: 4px;
        margin: 2px;
        border-radius: 2px;
    }
`;
const toggle = props => (
    <ToggleSt onClick={()=>props.toggleSideNav()}>
        <div/>
        <div/>
        <div/>
    </ToggleSt>
);

const mapDispatchToProps = dispatch =>{
    return {
        toggleSideNav: () => dispatch(actions.toggleSideNav())
    };
};

export default connect(null, mapDispatchToProps)(toggle);