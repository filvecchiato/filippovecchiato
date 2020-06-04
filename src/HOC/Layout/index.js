import React from 'react';
import {connect} from 'react-redux';
import useWindowSize from '../../Utilities/hooks/windowSize';
import {withRouter} from 'react-router-dom';

const Layout = props =>{
    const {width} = useWindowSize();
    console.log(props)
	return (
		<div>
            <header>
            <p style={{textTransform: 'capitalize'}}> {props.location.pathname.replace(/\//g, '')}</p>
            </header>
            {props.children}
        </div>
	)	
}

export default connect(null)(withRouter(Layout));