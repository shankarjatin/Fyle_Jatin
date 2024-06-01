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

const images = [
  { id: 1, src: 'path_to_image_1', title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
  { id: 2, src: 'path_to_image_2', title: 'Better Strategy & Quality', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
  { id: 3, src: 'path_to_image_3', title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...' },
];

const OurProjects = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container my-5">
      <div className="row">
      <h5 className="text-danger">OUR PROJECT</h5>
          <h2 className="font-weight-bold">WHY WE ARE BEST</h2>
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
