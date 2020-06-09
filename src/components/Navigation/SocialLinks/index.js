import React from 'react';
// import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';
import {SocialLink} from '../SocialLink';
import * as S from './style';

export const SocialLinks = props => {
    console.log(props)
    return (
        <S.Container location={props.location}>
            <SocialLink
                link="https://www.linkedin.com/in/filippo-vecchiato/"
                label="Filippo's LinkedIn Account"
            >
                <LinkedInIcon style={{color: '#08D9AB'}}/>
            </SocialLink>
            <SocialLink
                link="https://github.com/filvecchiato"
                label="Filippo's Github Account"
            >
                <GitHubIcon  style={{color: '#08D9AB'}}/>
            </SocialLink>
            {/* <SocialLink
                link="https://www.instagram.com/filvecchiato/"
                label="Filippo's Instagram Account"
            >
                <InstagramIcon style={{color: '#08D9AB'}}/>
            </SocialLink> */}
            <SocialLink
                link="mailto:fil.vecchiato@gmail.com"
                label="Send me an Email!"
            >
                <SendIcon  style={{color: '#08D9AB'}}/>
            </SocialLink>
        </S.Container>
    );
};