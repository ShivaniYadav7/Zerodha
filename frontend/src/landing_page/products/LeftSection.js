import React from "react";

function LeftSection(
  /*props*/
  {
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
  }
) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-5">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="p-1">
              Try Demo
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }} className="p-3">
              Learn More
            </a>
          </div>
          <div mt-3>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
