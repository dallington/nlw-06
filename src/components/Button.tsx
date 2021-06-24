import { ButtonHTMLAttributes } from 'react'
import styled, { css } from "styled-components";

type ButtonVariant = {
    primary?: Boolean,
    secondary?: Boolean
    google?: Boolean,
    marginTop?: number
    marginBottom?: number
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function baseCalc(value: number = 1, base: number = 8, unit: string = 'px'): string {
    return `${value * base}${unit}`;
}

const MyButton = styled.button<ButtonVariant> `
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 8px;
    height: 50px;
    padding: 0 32px;
    cursor: pointer;
    transition: filter .3s ease;
    background: var(--colorPrimary);
    color: #fff;
    border: 0;

    &:not(:disabled):hover {
        filter: brightness(0.8);
    }

    ${props => props.secondary && css`
        background: var(--colorPrimary);
        color: #fff;
    `}
    ${props => props.secondary && css`
        background: var(--colorSecondary);
        color: #fff;
    `}
    ${props => props.google && css`
        background: #EA4335;
        color: #fff;
    `}
    img, i {
        margin-right: 8px;
    }
    margin-top: ${props => baseCalc(props.marginTop)};
    margin-bottom: ${props => baseCalc(props.marginBottom)};
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

function Button(props: ButtonProps & ButtonVariant) {
    return (
        <MyButton {...props}>
        </MyButton>
    )
}


export default Button

