import React from "react";

function Plan() {
  return (
    <div className="text-center container-fluid">
      <h2>A plane For every one </h2>
      <p>
        Simple and affordable price plans for any one to take oure support and
        services
      </p>

      <div class="row">
        <div class="pricing-col col-lg-4 col-md-6 ">
          <div class="card bg-info">
            <h3>basic</h3>
            <hr></hr>
            <div class="card-body">
              <h2>Free</h2>
              <p>400 Req a hour</p>
              <p>10 gb data per day</p>
              <p>Retricated App Usage</p>
              <button class="btn btn-lg btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-col col-lg-4 col-md-6 bg-">
          <div class="card bg-success bg-gradient">
            <h3>Standard</h3>
            <hr></hr>
            <div class="card-body ">
              <h2>$49 / mo</h2>
              <p>Unlimited Req</p>
              <p>1000 Gb per date</p>
              <p>Unlimited App Usage</p>
              <button class="btn btn-lg btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-col col-lg-4 col-md-12">
          <div class="card bg-danger bg-gradient">
            <h3>Enterprise</h3>
            <hr></hr>
            <div class="card-body">
              <h2>$99 / mo</h2>
              <p>24/7 service</p>
              <p>Unlimited Req a hour</p>
              <p>Unlimited Data per day</p>
              <p>Unlimited App Usage</p>
              <button class=" btn btn-lg btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
