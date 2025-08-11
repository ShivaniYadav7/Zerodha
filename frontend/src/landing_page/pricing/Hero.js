import React from "react";

function Hero() {
  return (
    <div className="container">
      <h1>Charges</h1>
      <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/pricingEquity.svg`}
            alt="Pricing Equity"
          />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/pricing20.svg`}
            alt="Pricing 20"
          />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/pricingMF.svg`}
            alt="Pricing MF"
          />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>

      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-6 p-4 fs-10 text-start text-muted">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>Brokerage calculator</h3>
          </a>

          <ul>
            <p>
              <h5>Securities/Commodities transaction tax </h5>Tax by the
              government when transacting on the exchanges. Charged as above on
              both buy and sell sides when trading equity delivery. Charged only
              on selling side when trading intraday or on F&O. When trading at
              Zerodha, STT/CTT can be a lot more than the brokerage we charge.
              Important to keep a tab.
            </p>
            <p>
              <h5>Transaction/Turnover Charges</h5>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions. BSE has revised transaction charges in XC, XD, XT, Z
              and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
              groups have been merged into a new group X w.e.f 01.12.2017) BSE
              has revised transaction charges in SS and ST groups to ₹1,00,000
              per crore of gross turnover. BSE has revised transaction charges
              for group A, B and other non exclusive scrips (non-exclusive
              scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of
              turnover on flat rate basis w.e.f. December 1, 2022. BSE has
              revised transaction charges in M, MT, TS and MS groups to ₹275 per
              crore of gross turnover
            </p>
            <p>
              <h5>Call & trade</h5>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <p>
              <h5>Stamp charges</h5>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <p>
              <h5>NRI brokerage charges</h5>₹100 per order for futures and
              options. For a non-PIS account, 0.5% or ₹100 per executed order
              for equity (whichever is lower). For a PIS account, 0.5% or ₹200
              per executed order for equity (whichever is lower). ₹500 + GST as
              yearly account maintenance charges (AMC) charges.
            </p>
            <p>
              <h5>Account with debit balance</h5>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <p>
              <h5>
                Charges for Investor's Protection Fund Trust (IPFT) by NSE
              </h5>
              Equity and Futures - ₹10 per crore + GST of the traded value.
              Options - ₹50 per crore + GST traded value (premium value).
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </p>
            <p>
              <h5>Margin Trading Facility (MTF) </h5>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold. MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
              lower. MTF pledge charge: ₹15 + GST per pledge and unpledge
              request per ISIN.
            </p>
          </ul>
        </div>
        <div className="col-6 p-4 fs-10 text-start text-muted">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>List of Charges</h3>
          </a>
          <ul>
            <p>
              GST Tax levied by the government on the services rendered. 18% of
              ( brokerage + SEBI charges + transaction charges)
            </p>

            <p>
              <h5>SEBI Charges </h5>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>

            <p>
              <h5>DP (Depository participant) charges</h5>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity. Female demat account holders (as first
              holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
              fee. Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>

            <p>
              <h5>Pledging charges </h5>₹30 + GST per pledge request per ISIN.
            </p>

            <p>
              <h5>AMC (Account maintenance charges)</h5>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, <d>Click here</d>For
              non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90
              days). To learn more about AMC,<a>Click here</a>
            </p>

            <p>
              <h5>Corporate action order charges</h5>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>

            <p>
              <h5>Off-market transfer charges </h5>₹25 per transaction.
            </p>

            <p>
              <h5>Physical CMR request </h5>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>

            <p>
              <h5>Payment gateway charges </h5>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>

            <p>
              <h5>Delayed Payment Charges </h5>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>

            <p>
              <h5>Trading using 3-in-1 account with block functionality </h5>
              Delivery & MTF Brokerage: 0.5% per executed order. Intraday
              Brokerage: 0.05% per executed order.
            </p>
          </ul>
        </div>
      </div>

      <h3 className="text-muted">Disclaimer</h3>

      <p>
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
    </div>
  );
}

export default Hero;
