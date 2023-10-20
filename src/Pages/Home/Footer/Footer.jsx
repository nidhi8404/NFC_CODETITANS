import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Medicines</NavLink>
                                <NavLink className="footer-link">Meet the Team</NavLink>
                                <NavLink className="footer-link">Appointment Form</NavLink>
                                <NavLink className="footer-link">Blogs</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Ayurvedic Dictionary</NavLink>
                                <NavLink className="footer-link">Ayurvedic Implants</NavLink>
                                <NavLink className="footer-link">General Ayurvedic</NavLink>
                                <NavLink className="footer-link">Ayurvedic Remedy</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Datobbo Dentistry 5212 Cedar</NavLink>
                                <NavLink className="footer-link">Village Dr Mason, NY.</NavLink>
                                <NavLink className="footer-link">Phone:+91 986780 6807</NavLink>
                                <NavLink className="footer-link">Email:sattva@gmail.com</NavLink>
                                <NavLink className="footer-link">Fax:+1 675 5867 340</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2022 - <span className="developer">Sattva</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;