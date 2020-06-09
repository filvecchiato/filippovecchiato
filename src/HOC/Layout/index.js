import React from 'react';
import useWindowSize from '../../Utilities/hooks/windowSize';
import {withRouter} from 'react-router-dom';
import * as S from './style';
import Toolbar from '../../components/Navigation/Toolbar';
// import {SocialLinks} from '../../components/Navigation/SocialLinks';
// import {PageNavigations} from '../../components/Navigation/PageNavigations';
import {WrappedTransition} from '../../components/General/WrappedTransition';

const Layout = props =>{
    const {width} = useWindowSize();
    const {
        location,
        children
    } = props;

	return (
		<React.Fragment>
            <WrappedTransition
                timeout={4000}
                className={'textFadeIn'}
                in
            >
                <S.Header>
                    <Toolbar
                        location={location.pathname}
                    />
                </S.Header>
            </WrappedTransition>
            <S.Body>
                <WrappedTransition
                    timeout={4000}
                    className={'textFadeIn'}
                    in
                >
                    {/* <SocialLinks
                        location={location.pathname}
                    /> */}
                </WrappedTransition>
                {location.pathname ==='/home' && width>800 &&
                    <WrappedTransition
                        timeout={4000}
                        className={'textFadeIn'}
                        in
                    >
                        {/* <PageNavigations/> */}
                    </WrappedTransition>
                }
                {children}
            </S.Body>
        </React.Fragment>
	)	
}

export default withRouter(Layout);