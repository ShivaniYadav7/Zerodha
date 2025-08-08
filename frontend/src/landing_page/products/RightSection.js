import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className="btn btn-link ps-0">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6 p-5">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default RightSection;
