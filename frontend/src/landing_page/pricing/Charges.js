import React from "react";
function Charges() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-12 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Charges for account opening</h3>
          </a>

          <table className="table table-bordered mt-3 text-start">
            <thead>
              <tr>
                <th>Type of Account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online Account</td>
                <td>
                  <button className="btn btn-success">FREE</button>
                </td>
              </tr>
              <tr>
                <td>Offline Account</td>
                <td>
                  <button className="btn btn-success">FREE</button>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only) </td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only){" "}
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-12 p-4">
          <h3 className="fs-5">Charges for optional value added services</h3>

          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Service </th>
                <th>Billing Frquency </th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape </td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction </td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charges;
