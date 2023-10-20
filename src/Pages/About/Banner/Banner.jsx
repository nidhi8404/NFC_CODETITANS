import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title" style={{ color: 'black' }}>
                            <h1>About Us</h1>
                        </div>
                 
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                            <div className="banner-animate">
                                <img src="https://media.istockphoto.com/id/173877738/photo/herbal-treatment.jpg?s=612x612&w=0&k=20&c=eu2OSQLQhhocN02tslGZVIKjJr-nhKj-dzDqPBPylPs=" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
