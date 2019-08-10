import React from 'react';
import { Container } from 'react-bootstrap';

export default function PageNotFound() {
    return (
        <div>
            <Container style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1>404</h1>
                <h2>The page you seek doesn't exist.</h2>
            </Container>
        </div>
    );
}