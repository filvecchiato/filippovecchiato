import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {colours} from '../../../../global-styles';

const NavLinkSt = styled(NavLink)`
    text-decoration: unset;
    margin: auto 8px;
    width: calc(100% - 80px);
    height: 40px;
    padding: 0px 40px;
    color: ${colours.grey03};

    &:hover{
        color: ${colours.highlights};
    }
    &.active{
        color: ${colours.highlights};
        border-left: 4px solid ${colours.highlights};
        border-bottom: 2px solid ${colours.grey03};
        p{
            margin: 10px 6px;
        }
    }
    p{
        margin: 10px;
    }
`;

const NavItem = props => {
    return (
        <NavLinkSt to={props.link}>
            <p>{props.name}</p>
        </NavLinkSt>
    );
};

export default NavItem;