import React from 'react';
import './styles.css';
import Logo from './images/AllAmericanPaintingLogo.jpg';


const Banner = () => {
    return (
        <div className="background-banner container-fluid">
            <div className="row">
                <div className="col-md-3 text-center text-md-left">
                    <div>
                        <img alt="logo" src={Logo} height="50%" width="60%"/>
                    </div>
                </div>
                <div className="col-6"><br /></div>
                <div className="col-md-3">
                    <p className="text-center text-md-right">
                        ALL AMERICAN PAINTING <br/>
                        1569 Kolln Street <br/>
                        Pleasanton, CA 94566 <br/>
                        <a href="tel:510-461-1677">(510) 461-1677</a>
                        <br/>
                        CA License #710988 Bonded/Insured<br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;