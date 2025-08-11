import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-3">
        <h1 className="fs-3 text-center">People</h1>
      </div>

      <div
        className="row p-5 mt-3 text-muter fs-6"
        style={{ fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/founder.jpg`}
            alt="founder"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shivani</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Shivani bootstrapped and created Zerodha Clone Project in 2025 to
            overcome the hurdles she faced during her decade long stint as a
            trader. Today, Zerodha clone has changed the landscape of the Indian
            broking industry.
          </p>

          <p>
            She is a B.Tech student at Pimpri Chinchwad College of Engineering,
            Pune.
          </p>

          <p>Playing badminton is her hobby.</p>
        </div>
      </div>

      <p>
        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
        <a href="">Twitter</a>
      </p>
      <p>
        <a href="" style={{ textDecoration: "none" }}>
          Rainmatter
        </a>
        , our fintech fund and incubator, has invested in several fintech
        startups with the goal of growing the Indian capital markets.
      </p>
      <p>
        And yet, we are always up to something new every day. Catch up on the
        latest updates on our blog or see what the media is saying about us or
        learn more about our business and product philosophies.
      </p>
    </div>
  );
}

export default Team;
