import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Homepage from '../../../Images/firstpage.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Nurturing Nature</h2>
                                <h1>Nourishing You</h1>
                                <p className="mb-xs-5">Ayurveda is an ancient system of medicine that originated in India over 5,000 years ago. It is one of the world's oldest holistic healing systems and is still widely practiced today. Here is some key information about Ayurveda</p>
                                <div className="banner-btn m-sm-auto">
                                <Link to="/login" className="link-btn">
    <button className="theme-btn">Appointment</button>
</Link>

                                    
                                    <button className="bth-blank">Learn More</button>
                                </div>
                                
                            </div>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                        <div className="banner-animate">
                            <img src={Homepage}alt=""className="first-page" />
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;