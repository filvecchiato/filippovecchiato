import css from "@emotion/css/macro";
import PropagateLoader from "react-spinners/PropagateLoader";
import React from 'react';
import {colours} from '../../global-styles';

const override = css`
    display: block;
    margin: 50px auto;
    width:fit-content;
    border-color: ${colours.green01};
`;

const Spinner = () => (
    <PropagateLoader
        css={override}
        size={30}
        color={`${colours.green01}`}
        loading
    />
);

export default Spinner;