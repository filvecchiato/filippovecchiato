import React from 'react';
import * as S from './style';
import {NavigationItems} from '../MainNavigationItems';
import {withRouter} from 'react-router-dom';
import useWindowSize from '../../../Utilities/hooks/windowSize';

const Toolbar = props => {
    const {width} = useWindowSize();
    return (
        <S.Container>
            {props.location.pathname !=="/home" &&
                <React.Fragment>
                    <S.NameContainer onClick={()=>props.history.push('/home')}>
                        <S.Name> Filippo Vecchiato </S.Name>
                    </S.NameContainer>
                    <NavigationItems location={props.location.pathname}/>
                </React.Fragment>
            }
            {props.location.pathname === "/home" && 
                <React.Fragment>
                    <div style={{margin: '2px 10px'}}>
                        <S.Name> Filippo Vecchiato </S.Name>
                    </div>
                    <NavigationItems location={props.location.pathname}/>
                </React.Fragment>
            }
        </S.Container>
    )
}

export default withRouter(Toolbar);