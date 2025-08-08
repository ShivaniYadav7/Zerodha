import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 mt-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <button className="btn btn-dark">
          <a href="">My tickets</a>
        </button>
      </div>
      <div className="row p-5">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control form-control-sm mb-5"
            placeholder="Eg: how do I activate F&O..."
            style={{ height: "50px", fontSize: "14px", padding: "4px 8px" }}
          />
        </div>
        <a href="">Quarterly Settlement of Funds - July 2025</a>

        <a href="">
          Exclusion of F&O contracts on 8 securities from August 29, 2025
        </a>
      </div>
    </section>
  );
}

export default Hero;
