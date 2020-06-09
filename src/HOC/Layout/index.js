import React from 'react';
import useWindowSize from '../../Utilities/hooks/windowSize';
import {withRouter} from 'react-router-dom';
import * as S from './style';
import Toolbar from '../../components/Navigation/Toolbar';
import {SocialLinks} from '../../components/Navigation/SocialLinks';
import {WrappedTransition} from '../../components/General/WrappedTransition';
import SideNav from '../../components/Navigation/SideNav';
import {connect} from 'react-redux';

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
                    <Toolbar/>
                </S.Header>
            </WrappedTransition>
            <S.Body>
                {/* {width>1200 && location.pathname!=="/home" &&
                    <SideNav
                        isOpen
                        width={width}
                    />
                }
                {width<851 &&
                    <SideNav
                        isOpen={props.sideNavOpen}
                    />
                } */}
                {children}
            </S.Body>
            <SocialLinks/>
        </React.Fragment>
	)	
}

const mapState = state => {
    return {
        sideNavOpen: state.UI.sideNavOpen
    };
};

export default connect(mapState)(withRouter(Layout));