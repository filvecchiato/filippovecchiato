import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';

const ButtonSt = styled.button`
    margin: 10px;
`;

export const SocialLink = props => {
    const openLink = (url) => {
        window.open(url, '_blank');
    }
    const {
        link,
        children,
        label
    } = props;

    return (
        <Tooltip title={label}>
            <ButtonSt onClick={()=>openLink(link)}> 
                {children}
            </ButtonSt>
        </Tooltip>
    );
};