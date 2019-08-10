import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function PageContact() {
    return (
        <div>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <Row>
                    <Col>
                        <iframe title="PUMA Computing location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9230.264183649064!2d107.16520145765367!3d-6.286398010081312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984caf54df305%3A0xb7156354ad963e4d!2sPresident+University!5e0!3m2!1sid!2sid!4v1552969377683" style={{width: '100%', height: '100%', border: '0'}} allowfullscreen></iframe>
                    </Col>
                    <Col>
                        <small>Feel free to fill the form below if you have any message to PUMA Computing</small>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Control as="textarea" placeholder="Enter message" rows={5} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}