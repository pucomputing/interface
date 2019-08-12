import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function PageAbout() {
    return (
        <div>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>Faculty of Computing</h2>
                <Row>
                    <Col>
                        <img alt="Faculty of Computing" style={{width: '100%', height: 'auto' }} src="/assets/img/faculty.png" />
                    </Col>
                    <Col>
                        <p>Computer Science is the theoritical study and practical application of computation, including topics such as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. With the rapidly growing technology industry, the use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
                        <p>Computing (Computer Science Faculty in President University) consists of 3 majors: Information Technology, Information System, and Visual Communication Design. These three faculties hold activities and events with the help of the student organization called PUMA (President University Major Association), which represents each major or faculty.</p>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>Computing Dean and Head Study Program</h2>
                <Row>
                    <Col>
                        <img alt="Mr. Nur" style={{width: '100%', height: 'auto' }} src="/assets/img/lecturer/nur.jpg" />
                    </Col>
                    <Col>
                        <img alt="Mr. Rila" style={{width: '100%', height: 'auto' }} src="/assets/img/lecturer/rila.jpg" />
                    </Col>
                    <Col>
                        <img alt="Mr. Rikip" style={{width: '100%', height: 'auto' }} src="/assets/img/lecturer/rikip.jpg" />
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>About PUMA Computing</h2>
                <Row>
                    <Col>
                        <img alt="PUMA Computing logo black" style={{width: '100%', height: 'auto' }} src="/assets/img/logo/horizontal-black-complete.png" />
                    </Col>
                    <Col>
                        <p>Computer Science is the theoritical study and practical application of computation, including topics such as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. With the rapidly growing technology industry, the use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
                        <p>Computing (Computer Science Faculty in President University) consists of 3 majors: Information Technology, Information System, and Visual Communication Design. These three faculties hold activities and events with the help of the student organization called PUMA (President University Major Association), which represents each major or faculty.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}