// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import './Introduction.css';
// import woman from '../images/woman-cake.jpg';

// const Introduction = () => {
//     return (
//         <Container className='intro-section'>
//             <Row>
//                 <Col sm={12} lg={7}>
//                     <div className='text-content'>
//                         <h3 className='award-winning'>AWARD WINNING</h3>
//                         <h1 className='title'>DIGITAL MARKETING <br></br> AGENCY</h1>
//                         <div className='description'>
//                         <p >
//                             Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
//                             Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum loremipsum ed lacus nec risus finibus feugiat et fermentum nibh. 
//                             Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus   .
//                         </p>
//                         </div>
                        
//                         <Button className='contact-button'>CONTACT US</Button>
//                     </div>
//                 </Col>
//                 <Col sm={12} lg={5}>
//                     <div className='image'>
//                         <img src={woman} alt='none' />
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Introduction;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Introduction.css';
import $ from 'jquery';
import woman from '../images/woman-cake.jpg';

const Introduction = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            work_email: event.target.work_email.value,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            terms: event.target.terms.checked,
        };

        $.ajax({
            url: 'https://getform.io/f/zazkjyxb',
            method: 'POST',
            data: formData,
            success: function (response) {
                alert('Form submitted successfully');
                handleClose();
            },
            error: function (error) {
                alert('There was an error submitting the form');
            }
        });
    };

    return (
        <Container className='intro-section'>
            <Row>
                <Col sm={12} lg={7}>
                    <div className='text-content'>
                        <h3 className='award-winning'>AWARD WINNING</h3>
                        <h1 className='title'>DIGITAL MARKETING <br /> AGENCY</h1>
                        <div className='description'>
                            <p>
                                Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
                                Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum loremipsum ed lacus nec risus finibus feugiat et fermentum nibh. 
                                Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus   .
                            </p>
                        </div>
                        <Button className='contact-button' onClick={handleShow}>CONTACT US</Button>
                    </div>
                </Col>
                <Col sm={12} lg={5}>
                    <div className='image'>
                        <img src={woman} alt='Digital Marketing' />
                    </div>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Talk to us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formWorkEmail">
                            <Form.Label>Work Email</Form.Label>
                            <Form.Control type="email" name="work_email" placeholder="Johndoe@acme.com" required />
                        </Form.Group>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="first_name" placeholder="John" required />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="last_name" placeholder="Doe" required />
                        </Form.Group>
                        <Form.Group controlId="formTerms">
                            <Form.Check type="checkbox" name="terms" label="I agree to Fyle's terms and conditions, and provide consent to send me communication." required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="contact-submit-button">
                            Contact Us <i className="fas fa-arrow-right"></i>
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Introduction;

