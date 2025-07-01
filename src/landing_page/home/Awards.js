import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img 
                        src='media/images/largestBroker.svg' 
                        alt='Largest broker illustration'
                        className='img-fluid'
                    />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all investment volumes 
                        in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity Trading</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>       
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;
