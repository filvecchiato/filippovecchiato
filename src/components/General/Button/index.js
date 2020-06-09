import styled, { css } from 'styled-components';
import { colours } from '../../../global-styles'

export const Button = styled.button`
    padding: 4px 20px;
    font-size: 16px;
    font-weight: bold;
    max-width: 170px;
    margin: 5px auto;
    height: 34px;
    background-color: transparent;
    border: 2px solid ${colours.green01};
    border-radius: 3px;
    color: ${colours.green01};

        &:hover {
            background-color: ${colours.green01};
            border: 2px solid ${colours.green01};
            color: ${colours.grey05}

        }

        &:focus {
            outline: 0;
        }

        &:disabled {
            background-color: transparent;
            border: 2px solid ${colours.grey01};
            opacity: 0.5;
            color:${colours.grey01};
            cursor: not-allowed;
        }

        ${({ color }) =>
            color === 'white' &&
            css`
                background-color: transparent;
                border: 2px solid ${colours.white01};
                color: ${colours.white01};

                    &:hover {
                        background-color: ${colours.white01};
                        border: 2px solid ${colours.white01};
                        color: ${colours.grey05};
                    }

                    &:disabled {
                        background-color: transparent;
                        border: 2px solid ${colours.grey01};
                        color: ${colours.grey01};
                        opacity: 0.5;
                        color:${colours.grey01};
                        cursor: not-allowed;
                    }
        `};

        ${({ color }) =>
            color === 'red' &&
            css`
                background-color: transparent;
                border: 2px solid ${colours.red01};
                color: ${colours.red01};

                &:hover {
                    background-color: ${colours.red01};
                    border: 2px solid ${colours.red01};
                    color: ${colours.white01};
                }

                &:disabled {
                    background-color: transparent;
                    border: 2px solid ${colours.grey01};
                    opacity: 0.5;
                    color:${colours.grey01};
                    cursor: not-allowed;
                }
        `};

        ${({ color }) =>
            color === 'blue' &&
            css`
                background-color: transparent;
                border: 2px solid ${colours.blue01};
                color: ${colours.blue01};

                &:hover {
                    background-color: ${colours.blue01};
                    border: 2px solid ${colours.blue01};
                    color: ${colours.white01};
                }

                &:disabled {
                    background-color: transparent;
                    border: 2px solid ${colours.grey01};
                    color:${colours.grey01};
                    opacity: 0.5;
                    cursor: not-allowed;
                }
        `};

         ${({ color }) =>
            color === 'black' &&
            css`
                background-color: transparent;
                border: 2px solid ${colours.grey06};
                color: ${colours.grey06};
                &:hover {
                    background-color: ${colours.grey06};
                    border: 2px solid ${colours.grey06};
                    color: ${colours.white01};
                }

                &:disabled {
                    background-color: transparent;
                    border: 2px solid ${colours.grey01};
                    color:${colours.grey01};
                    opacity: 0.5;
                    cursor: not-allowed;
                }
        `};
`;

export default Button;