import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function CustomFooter() {
    return (
    <Container>
        <Row>
            <Col>
                <img alt="PUMA Computing logo black" style={{width: '100%', height: '100%'}} src="/assets/img/logo/horizontal-black-complete.png" />
            </Col>
            <Col>
                <h4>{ 'Information' }</h4>
                <p>{ 'President University Campus' }</p>
                <p>{ 'Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Baru, Bekasi 17550 - Indonesia' }</p>
                <p>{ 'Email: puma.computing [at] president.ac.id' }</p>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
    );
}