import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpertGrowth.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


const ExpertGrowth = () => {
  return (
    <div className="container text-center my-5">
      <h5 className="text-danger">EXPERTS GROWTH</h5>
      <h3 className="extra-bold">OUR COMPANY GROWTH</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body ">
              <h5 className="card-title">
                <i className="fa fa-heart"></i>
                <br></br> 199+
              </h5>
            
              <p className="card-text">Staticfied Customers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-clock"></i>   <br></br> 1591+
              </h5>
              <p className="card-text">Days Of Operation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-check"></i>   <br></br> 283+
              </h5>
              <p className="card-text">Complete Project</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card hover-card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa fa-trophy"></i>   <br></br>75+
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
