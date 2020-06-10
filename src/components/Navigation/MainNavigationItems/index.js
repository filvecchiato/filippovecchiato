import React from 'react';
import GeneralNav from './GeneralNavigationItem';
import * as S from './style';
import windowSize from '../../../Utilities/hooks/windowSize';
import Toggle from '../SideNav/Toggle';

export const NavigationItems = props => {
    const pages = [
        {name: "Home", link: "/home"},
        {name: "About", link: "/about"},
        {name: "Work", link: "/projects"},
        {name: "Contacts", link: "/contacts"}
    ];
    const {width} = windowSize();

    return (
        <React.Fragment>
            {width>850 ?
                <S.NavItems>
                    {pages && pages.map((item, index)=> {
                        return (
                            <GeneralNav
                                key={index}
                                name={item.name}
                                link={item.link}
                            />
                        )
                    })}
                </S.NavItems>
                :
                <Toggle/>
            }
        </React.Fragment>
        
    );
};

export default NavigationItems;
