import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Introduction.css';
import woman from '../images/woman-cake.jpg';

const Introduction = () => {
    return (
        <Container className='intro-section'>
            <Row>
                <Col sm={12} lg={7}>
                    <div className='text-content'>
                        <h3 className='award-winning'>AWARD WINNING</h3>
                        <h1 className='title'>DIGITAL MARKETING <br></br> AGENCY</h1>
                        <p className='description'>
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
                            Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum loremipsum ed lacus nec risus finibus feugiat et fermentum nibh. 
                            Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus   .
                        </p>
                        <Button className='contact-button'>CONTACT US</Button>
                    </div>
                </Col>
                <Col sm={12} lg={5}>
                    <div className='image'>
                        <img src={woman} alt='none' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Introduction;
