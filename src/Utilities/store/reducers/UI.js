import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils';

const initialState = {
    sideNavOpen: false
};

const toggleSideNav =(state,action)=>{
    return updateObject(state, {
        sideNavOpen: !state.sideNavOpen
    });
};

const reducer =(state=initialState, action)=> {
    switch(action.type){
        case actionTypes.TOGGLE_SIDENAV:
            return toggleSideNav(state, action);
        default: 
            return state;
    };
};

export default reducer;