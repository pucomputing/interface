import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

export default function PageHome() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/member/whole.jpg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>{ 'First slide label' }</h3>
                    <p>{ 'Nulla vitae elit libero, a pharetra augue mollis interdum.'}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
                <h2>Latest Blogs</h2>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" style={{ width: '100%', height: '100%' }} src="/assets/blog/sopu01.jpg" />
                            <Card.Body>
                                <Card.Title>Computing in SOPU 2019</Card.Title>
                                <Card.Text>
                                    Sports Olympiad of President University (SOPU) is one of the biggest events that held by President University Student Union (PUSU). It was held as an annual championship of.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}