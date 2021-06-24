import styled from 'styled-components'

export const Wrapper = styled.div `
    display: flex;
    height: 100vh;
    align-items: stretch;
`

export const Aside = styled.aside `
    flex: 7;
    background: var(--colorPurple);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 130px 85px;
    color: #fff;
    img {
        max-width: 320px;
    }
    strong {
        font-family: var(--fontDisplay);
        font-size: 36px;
        font-weight: 700;
        line-height: 42px;
        margin-top: 8px;
        max-width: 440px;
    }
    p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        max-width: 450px;
        margin-top: 16px;
    }
    
`

export const Main = styled.main `
    flex: 8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 222px;
`

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 320px;
    > img {
        align-self: center;
    }
`

export const Form = styled.form `
    button, input, p {
        width: 100%;
    }
    span {
        display: flex;
        align-items: center;
        color: #A8A8B3;
        font-size: 14px;
        margin: 32px 0;
        &::before,
        &::after {
            content: '';
            width: 100%;
            height: 1px;
            background-color: currentColor;
            flex: 1;
        }
        &::before {
            margin-right: 16px;
        }
        &::after {
            margin-left: 16px;
        }
    }
    input {
        height: 50px;
        padding: 15px;
        border: 1px solid #A8A8B3;
        border-radius: 8px;
        color: A8A8B3;
        background: #fff;
        &::placeholder {
            color: #A8A8B3;
        }
    }
`
