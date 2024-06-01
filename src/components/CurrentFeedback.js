import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CurrentFeedback.css';

const CurrentFeedback = () => {
  return (
    <div className="container text-center my-5">
      <h5 className="text-danger">CLIENT'S FEEDBACK</h5>
      <h3 className="mb-5 extra-bold">PEOPLE SAY'S ABOUT US !</h3>
      <div className="feedback">
        <p className="quote">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
        </p>
        <p className="author">
          <span className="author-name">JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC.
        </p>
      </div>
    </div>
  );
};

export default CurrentFeedback;
