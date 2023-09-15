import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Sattva Ayurveda: Your Journey to Holistic Wellness</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Welcome to Sattva Ayurveda, your trusted partner on the path to holistic well-being.
                         At Sattva, we are dedicated to bringing you the ancient wisdom of Ayurveda, a time-tested system of natural healing that offers alternatives to conventional drugs, promoting harmony and balance within your body, mind, and spirit.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;