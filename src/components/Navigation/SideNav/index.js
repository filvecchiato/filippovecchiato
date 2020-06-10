import React from 'react';
import styled, {css} from 'styled-components';
// import {colours} from '../../../global-styles';
import NavItem from '../SecondaryNavigation';

const SideNavSt = styled.div`
    opacity:0.8;
    height: calc( 100% - 60px);
    position: absolute;
    background-color: transparent;
    top: 60px;
    ${props => props.width>1200 ? 
        css`
            left:0px;
            width: 250px;
        `
        :
        css`
            right:0px;
            width:50%;
        `
    };
    transition: transform 0.4 ease;
    @media(max-width: 450px){
        width: 100%;
    }
    
`;
const NavItemsSt = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 100px;
    a{
        margin: 10px auto;
        float: center;
    }
`;

const pages = [
    {name: "Home", link: "/home"},
    {name: "Bio", link: "/about"},
    {name: "Work", link: "/projects"},
    {name: "Consulting", link: "/consulting"},
    {name: "Engineering", link: "/engineering"},
    {name: "Contacts", link: "/contacts"},
];

const SideNav = props => {
    const {
        isOpen
    } = props;

    return (
        <SideNavSt isOpen={isOpen} width={props.width}>
            <NavItemsSt>
                {pages && pages.map((item, index)=> {
                    return (
                        <NavItem 
                            key={index}
                            name={item.name}
                            link={item.link}
                        />
                    );
                })}
            </NavItemsSt>
        </SideNavSt>
    );
};



export default SideNav;