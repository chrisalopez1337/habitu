import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export default function App() {
    return (
        <Container>
            <Header />
        </Container>
    );
}
