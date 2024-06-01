import React from 'react';
import './WhyChooseUs.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WhyChooseUs = () => {
  return (
    <div className="container text-center my-5">
      <h5 className="text-danger">WHY CHOOSE US</h5>
      <h2 className=" extra-bold">WHY WE ARE BEST</h2>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="icon-container mb-3">
            <i className="bi bi-bullseye"></i> {/* Example of an icon */}
          </div>
          <h5>Clarified Vision & Target</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="col-md-3">
          <div className="icon-container mb-3">
            <i className="bi bi-speedometer2"></i> {/* Example of an icon */}
          </div>
          <h5>High Performance</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="col-md-3">
          <div className="icon-container mb-3">
            <i className="bi bi-shield-lock"></i> {/* Example of an icon */}
          </div>
          <h5>Maintain Security</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="col-md-3">
          <div className="icon-container mb-3">
            <i className="bi bi-graph-up-arrow"></i> {/* Example of an icon */}
          </div>
          <h5>Better Strategy & Quality</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
