import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ServiceCarousel.css';

const Services = () => {
    const images = [
        "https://via.placeholder.com/800x600.png?text=Service+1",
        "https://via.placeholder.com/800x600.png?text=Service+2",
        "https://via.placeholder.com/800x600.png?text=Service+3",
        "https://via.placeholder.com/800x600.png?text=Service+4",
        "https://via.placeholder.com/800x600.png?text=Service+5",
        "https://via.placeholder.com/800x600.png?text=Service+6"
    ];

    return (
        <Carousel>
            {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt={`Slide ${index}`}
                    />
                    <Carousel.Caption>
                        <h3>Service {index + 1}</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Services;
