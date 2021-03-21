import React from 'react';
import di from '../imgs/Diamond.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import Fade from 'react-reveal/Fade'

function Diamond() {

    return (

        <section id="products">
            <div className="acontainer">

                <Fade right>

                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={di} alt="" />

                        </div>

                        <div className="eightt columnns">

                            <h1>Diamond Blanket</h1>

                            <div>
                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 6 KG
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
                                We are satisfying our wide base of clients by providing a wide collection of <b>Diamond Blanket</b> to our clients.  It offers adequate warmth to keep chilly nights at bay.
                                This blanket is very soft and luxurious with contemporary floral designs and is perfect for a winter season.
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


export default Diamond;
