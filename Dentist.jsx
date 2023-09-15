import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                    <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/01/03095334/ayush.jpg" alt="New Image" className="img-fluid" />

                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Our Mission</h2>
                            <p  className="black-text">Our mission is to empower you with the knowledge and resources to make informed choices about your health. We believe in the profound potential of Ayurveda to help you discover natural alternatives to pharmaceuticals, supporting your journey to vitality, longevity, and happiness.</p>
                            <p className="black-text">Ayurveda, which means "the science of life," is more than just a system of medicine; it's a way of living in harmony with nature. We embrace Ayurveda's holistic approach, which focuses on the interconnectedness of all aspects of life, including diet, lifestyle, and mental well-being.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;