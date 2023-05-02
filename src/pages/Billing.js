import React from "react";

function Billing() {
  return (
    <div className="container-fluid row justify-content-center">
      <div className=" p-3 text-center bg-primary text-white col-lg-6 col-sm-12 col-md-8">
        <spna className="fw-bold"> Invoice </spna>
        <div className="d-flex justify-content-between mt-2">
          <span>plane Price</span>
          <span>+ 15,000 rupees</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span>Gst Price </span>
          <span>+ 1,500 rupees</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span>process Price</span>
          <span>+ 150 rupees</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span>discount Price</span>
          <span>-300 rupees</span>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between mt-2">
          <span>Total</span>
          <span>16,350 rupees</span>
        </div>
        <hr></hr>
        <div className="d-grid gap-2 mx-auto">
          <button type="button" class="btn btn-light btn-lg">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Billing;
