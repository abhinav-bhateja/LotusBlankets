import React, {Component} from 'react';
import em from '../imgs/Emerald.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import Fade from 'react-reveal/Fade'

function Emerald() {

    return (
        <section id="products">

            <div className="acontainer pros">

                <Fade right>

                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={em}></img>

                        </div>
                        <div className="onee columnns"></div>

                        <div className="sevenn columnns">

                            <h1>Emerald Blanket</h1>

                            <div>

                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 3 KG
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
                                As per the demand of the industry as well as of our clients, we are involved
                                in providing astonishing collection of <b>Emerald Blanket.</b> The offered blanket
                                is made with high grade micro mink fabric for adding softness and plush
                                feel.
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


export default Emerald;
