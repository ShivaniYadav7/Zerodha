import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center align-items-center">
        <div className="col-12 img-fluid">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/homeHero.png`}
            alt="HomeHero"
            style={{ width: "90%" }}
          />
        </div>
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds</p>

        <div className="d-flex justify-content-center gap-4">
          <a href="http://localhost:3001">
            <button className="btn btn-outline-secondary fs-5">
              Go to Dashboard
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
