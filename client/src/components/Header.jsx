import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-apart;
    margin: 0px 5px 5px 5px;
    width: 100%;
`;

const Title = styled.h3`
    color: #2c2e2e;
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
    flex-direction: row;
    justify-content: space-apart;
`;

const Button = styled.button`
    border: 3px solid #d543e6;
    border-radius: 7px;
    font-family: inherit;
    font-weight: bold;
    font-size: inherit;
    background-color: #d543e6;
    color: white;
    cursor: pointer;
    padding: 5px;
    margin: 0px 5px 0px 5px;
    transition-duration: 0.2s;
    &:hover {
        background-color: white;
        color: #d543e6;
    }
`;

export default function Header() {
    return (
        <Container>
            <Title>Habitu - habit tracker</Title>
            <ButtonWrapper>
                <Button>Sign Up</Button>
                <Button>Log In</Button>
            </ButtonWrapper>
        </Container>
    );
}
