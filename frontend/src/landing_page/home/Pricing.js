import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-4 text-center text-md-start">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/coin.png`}
            alt="Coin"
            className="mb-3"
            style={{ width: "100px" }}
          />
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-8 mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
