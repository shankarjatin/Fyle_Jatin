

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Services.css';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';

const Services = () => {
    const [index, setIndex] = useState(0);

    const items = [
        {
            img: img1,
            title: "Service 1",
            description: "Description for service 1"
        },
        {
            img: img2,
            title: "Service 2",
            description: "Description for service 2"
        },
        {
            img: img3,
            title: "Service 3",
            description: "Description for service 3"
        },
        {
            img: img4,
            title: "Service 4",
            description: "Description for service 4"
        },
        {
            img: img5,
            title: "Service 5",
            description: "Description for service 5"
        }
    ];

    const groupedItems = items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className='services-section'>
            <Row>
                <Col lg={6} sm={12}>
                    <div className='text-content'>
                        <h3 className='section-heading'>WHAT WE DO</h3>
                        <h1 className='title'>SERVICES PROVIDE FOR YOU</h1>
                      
                    </div>
                    </Col>
                    <Col lg={6}>
                    <p className='description'>
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum.
                        </p>
                    </Col>
             
            </Row>
            <Row>
                <Col sm={12}>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        controls={false}
                        indicators={false}
                        interval={null}
                    >
                        {groupedItems.map((group, slideIndex) => (
                            <Carousel.Item key={slideIndex}>
                                <div className='card-group'>
                                    {group.map((item, idx) => (
                                        <div className='service-card' key={idx}>
                                            <img
                                                className="d-block w-100"
                                                src={item.img}
                                                alt={`Slide ${slideIndex}`}
                                            />
                                            
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="carousel-dots">
                        {groupedItems.map((_, dotIndex) => (
                            <span
                                key={dotIndex}
                                className={`dot ${index === dotIndex ? 'active' : ''}`}
                                onClick={() => handleSelect(dotIndex)}
                            ></span>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
