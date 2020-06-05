import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css';

export const WrappedTransition = props => (
    <CSSTransition
        classNames={props.className}
        timeout={props.timeout}
        in={props.in}
        exit={props.exit}
        onEntered={props.onEntering}
        appear
    >
        <React.Fragment>
            {props.in && 
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            }
        </React.Fragment>
    </CSSTransition>
);