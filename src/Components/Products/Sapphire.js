import React from 'react';
import sa from '../imgs/Sapphire.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import Fade from 'react-reveal/Fade'

function Sapphire() {

    return (

        <section id="products">
            <div className="acontainer">

                <Fade right>

                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={sa} alt="" />

                        </div>

                        <div className="eightt columnns">

                            <h1>Sapphire Blanket</h1>

                            <div>

                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 2.5 KG
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
                                From our extensive range of products, our clients can avail a superior quality collection of <b>Sapphire Blanket. </b>
                                Our blanket is designed by our professionals who use a finest quality fabric for the complete production process.
                                The ultra-soft microlight plush fabric ensures comfort, adds extra warmth and loft.
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


export default Sapphire;
