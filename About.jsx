//cross reference - 1st page 
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donto from '../../../Images/about-banner1.png';
import dontoAnimated from '../../../Images/cleaner.png';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        
                    <div className="about-left" style={{ padding: '20px' }}>
    <img src="https://www.ayurvedicpharmacompanies.com/wp-content/uploads/2022/02/Ayurvedic-Medicine-Distributors-in-Bangalore.jpg" alt="Your Image" className="img-fluid" />
</div>
<div className="about-left" style={{ padding: '20px' }}>
    <img src="https://www.polycareherbals.com/wp-content/uploads/2017/05/herbal-supplements-main.jpg" alt="Your Image" className="img-fluid" />
</div>


                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Cross-Referencing Ayurveda: Your Path to Natural Healing</h1>
                                <p>Cross-referencing in Ayurveda involves the careful consideration of Ayurvedic remedies and practices alongside conventional pharmaceutical options. 
                                    It means exploring the profound potential of Ayurveda, the ancient science of holistic healing, 
                                    as a viable and often preferable alternative to chemically synthesized drugs.</p>
                         </div>
                         <div className="about-content text-start" data-aos="zoom-in">
                                <h3>Why Cross-Referencing Matters</h3>
                                <p>Modern science has made incredible strides in healthcare, but it's also brought us a multitude of pharmaceuticals with potential side effects.
                                     Cross-referencing empowers you to explore Ayurveda's holistic approach, considering natural remedies, dietary choices, lifestyle adjustments, and mental well-being alongside traditional treatments.</p>
                            
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>300k</span>
                                    <span>+</span>
                                    <p>Ayurvedic practitioners</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>70k</span>
                                    <span>+</span>
                                    <p>Ayurvedic doctors.</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25k</span>
                                    <span>+</span>
                                    <p>Ayurveda enthusiasts:</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50k</span>
                                    <span>+</span>
                                    <p>Health Seekers</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;