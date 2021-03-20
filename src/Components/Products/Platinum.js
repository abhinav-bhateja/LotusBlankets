import React, {Component} from 'react';
import pt from '../imgs/Platinum.png';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import Fade from 'react-reveal/Fade'

function Platinum() {

    return (

        <section id="products">
            <div className="acontainer">

                <Fade right>

                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={pt}></img>

                        </div>

                        <div className="eightt columnns">

                            <h1>Platinum Blanket</h1>

                            <div>
                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 4 KG
                                    </div>

                                    <div className="fivee columnns">
                                        Material: 100% Polyester <br/>
                                        Technics: Automatic stitching <br/>
                                        Packaging Details: Blanket Bag <br/>
                                        Delivery Time: 7 Days
                                    </div>
                                </div>

                            </div>

                            <p>
                                We are devoted towards offering the qualitative range of <b>Platinum Blanket</b>, as per client’s precise need and requirements.
                                Our blanket is designed by our expert artists using superior quality yarns procured from reliable vendors of the market.
                                It is used in hotels, homes and other places for keeping the body relaxed, calm and protected from chilly weather.
                            </p>

                            <div className="back">
                                <Link to={"/"}>
                                    <button className="danger">
                                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Go Back
                                    </button>
                                </Link>

                                &nbsp;&nbsp;&nbsp;

                                <a className="smoothscroll" href="#contact">
                                    <button className="enqu">
                                        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon> Enquire Now
                                    </button>
                                </a>

                            </div>




                        </div>


                    </div>
                </Fade>

            </div>
        </section>

    );
}


export default Platinum;
