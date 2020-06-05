import React from 'react';
import * as S from './style';
import PageNavigation from './PageNavigation';

export const PageNavigations = props =>{
    return (
        <S.PageLinks>
            <PageNavigation 
            >
                {{
                    short: '01',
                    long: 'Home'
                }}
            </PageNavigation>  
            <PageNavigation 
            >
                 {{
                    short: '02',
                    long: 'Bio'
                }}
            </PageNavigation>  
            <PageNavigation 
            >
                 {{
                    short: '03',
                    long: 'Projects'
                }}
            </PageNavigation> 
            <PageNavigation 
            >
                 {{
                    short: '04',
                    long: 'Engineering'
                }}
            </PageNavigation> 
            <PageNavigation 
            >
                 {{
                    short: '05',
                    long: 'Contacts'
                }}
            </PageNavigation>
        </S.PageLinks>
    )
}