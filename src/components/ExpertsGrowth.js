import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpertGrowth.css';

const ExpertGrowth = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="text-danger">EXPERTS GROWTH</h2>
      <h3 className="mb-5">OUR COMPANY GROWTH</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-heart"></i> 199+
              </h5>
              <p className="card-text">Staticfied Customers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-clock"></i> 1591+
              </h5>
              <p className="card-text">Days Of Operation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-check"></i> 283+
              </h5>
              <p className="card-text">Complete Project</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-trophy"></i> 75+
              </h5>
              <p className="card-text">Win Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertGrowth;
