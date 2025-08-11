import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        {/* Product image */}
        <div className="col-md-6 p-5">
          <img
            src={imageURL}
            className="img-fluid"
            alt={productName || "Product"}
          />
        </div>

        <div className="col-md-2"></div>

        {/* Product details */}
        <div className="col-md-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div>
            <a href={tryDemo} className="p-1">
              Try Demo
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }} className="p-3">
              Learn More
            </a>
          </div>

          {/* Store badges */}
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
      </div>
    </div>
  );
}

export default LeftSection;
