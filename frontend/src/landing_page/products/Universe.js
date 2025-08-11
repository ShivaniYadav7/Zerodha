import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/zerodhaFundhouse.png`}
            alt="Smallcase"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/sensibullLogo.svg`}
            alt="Options Platform"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/tijori.svg`}
            alt="Research Platform"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/streakLogo.png`}
            alt="Trading Platform"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/smallcaseLogo.png`}
            alt="Thematic Investing"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks or ETFs.
          </p>
        </div>

        <div className="col p-3 mt-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/dittoLogo.png`}
            alt="Insurance Advice"
            className="img-fluid mb-3"
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      {/* Button row */}
      <div className="row mt-4">
        <div className="col text-center">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "200px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
