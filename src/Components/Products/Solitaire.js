import React, {Component} from 'react';
import mink from "../imgs/Mink-Blankets-optimized.jpg";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import Fade from 'react-reveal/Fade'

function Solitaire() {

    return (

        <section id="products">
            <div className="acontainer">

                <Fade right>

                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={mink}></img>

                        </div>

                        <div className="eightt columnns">

                            <h1>Solitaire Blanket</h1>

                            <div>
                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 5 KG
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
                                Being a quality oriented firm, we are gaining immense appreciation for offering an excellent assortment of <b>Solitaire Blanket. </b>
                                Our offered range of blanket is lightweight to use and brings warm as other blankets.
                                It is perfect to use up on the couch, bed, etc.
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


export default Solitaire;
