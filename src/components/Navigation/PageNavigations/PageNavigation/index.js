import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {colours} from '../../../../global-styles';
import {withRouter} from 'react-router-dom';

const ButtonSt = styled.button`
    background: transparent;
    border: none;
    color: ${props=> props.isActive ? `${colours.green01}` : `${colours.grey04}`};
    margin: 5px;
    width: 50px;
    transition: width 0.5s ease-in-out;
    border-bottom: ${props=> props.isActive? `2px solid ${colours.green01}`: `2px solid ${colours.grey04}`};
    ${props=>props.show && css`
        width: 150px;
        transition: width 0.5s ease-in-out;
    `};
    &:focus{
        outline: none;
    }
`;

const PageNavigation = props => {
    const [show, setShow] = useState(false);
    const {
        children
    } = props;

    return (
        <ButtonSt
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={()=>{}}
            show={show}
            isActive={props.location.pathname.replace(/\//g,"")===children.long.toLowerCase()? true : false}
        >
            {show && 
                <React.Fragment>
                    {children.long}
                </React.Fragment>
            }
            {!show && 
                <React.Fragment>
                    {children.short}
                </React.Fragment>
            }
        </ButtonSt>
    )
};

export default withRouter(PageNavigation);