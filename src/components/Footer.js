import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';

const Footer = () => {
    const logos = [
        { img: logo1, alt: 'Harrison Industry Co' },
        { img: logo2, alt: 'Design Studio' },
        { img: logo3, alt: 'Design Exclusive' },
        { img: logo4, alt: 'Fort Dexon' },
        { img: logo5, alt: 'Barbecue' },
        { img: logo6, alt: 'Caley Peace' }
    ];

    return (
        <footer className="footer-section">
            <Container>
                <Row className="justify-content-center">
                    {logos.map((logo, idx) => (
                        <Col key={idx} xs={6} sm={4} md={2} className="text-center">
                            <img src={logo.img} alt={logo.alt} className="footer-logo" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
