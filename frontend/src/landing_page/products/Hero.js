import React from "react";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import RightSection from "./RightSection";
function Hero() {
  return (
    <>
      <div className="container border-bottom">
        <div className="text-center mt-5 p-3">
          <h1>Technology</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek ,modern and intuitive trading platforms
          </h3>
          <p className="mt-3 mb-5">
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Investment Offerings{" "}
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
