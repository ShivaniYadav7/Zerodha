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

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src={`${process.env.PUBLIC_URL}/media/images/googlePlayBadge.svg`}
                alt="Get it on Google Play"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "15px" }}>
              <img
                src={`${process.env.PUBLIC_URL}/media/images/appStoreBadge.svg`}
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>

        <div className="col-md-2"></div>
        <div className="col-md-6 p-5">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default RightSection;
