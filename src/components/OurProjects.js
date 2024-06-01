// import React from 'react';

// const OurProjects = () => {
//   return (
//     <section id="our-projects">
//       <h2>Our Projects</h2>
//       <p>This is the our projects section.</p>
//     </section>
//   );
// }

// export default OurProjects;


import React, { useState } from 'react';
import './OurProjects.css';
import imgp1 from '../images/img-p1.jpg'
import imgp2 from '../images/img-p2.jpg'
import imgp3 from '../images/img-p3.jpg'
const images = [
  { id: 1, src: imgp1, title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
  { id: 2, src: imgp2, title: 'Better Strategy & Quality', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
  { id: 3, src: imgp3, title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
];

const OurProjects = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container my-5">
     
      <h5 className="text-danger">OUR PROJECT</h5>
          <h2 className=" extra-bold">WHY WE ARE BEST</h2>
          <div className="row main-area">
        <div className="col-md-8">
          <img src={selectedImage.src} alt={selectedImage.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-4">
         
          <div className="list-group">
            {images.map((image) => (
              <button
                key={image.id}
                className={`list-group-item list-group-item-action ${selectedImage.id === image.id ? 'active' : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <h5>{image.title}</h5>
                <p className='description'>{image.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
