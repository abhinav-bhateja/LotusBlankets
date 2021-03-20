import React from 'react';
import pe from '../imgs/Pearl.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";

function Pearl() {

    return (
        <section id="products">
            <div className="acontainer">
                <Fade right>
                    <div className="arow">

                        <div className="fourr columnns">

                            <img src={pe} alt=""></img>

                        </div>

                        <div className="eightt columnns">

                            <h1>Pearl Blanket</h1>

                            <div>
                                <div className="checking-feature-top arow">
                                    <div className="sevenn columnns">
                                        Price Range: ₹500 - ₹2000 <br/>
                                        Color: Available in all colors <br/>
                                        Pattern: Available in plain as well as in printed <br/>
                                        Weight: 2 KG
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
                                With an objective to fulfill the ever-evolving demands of our clients, we are engaged in offering a wide assortment of <b>Pearl Blanket.</b>  It is light in weight and breathable for comfortable and cozy feel.
                                This comes in modern and trendy design to achieve ideal softness and the optimal amount of stretch and durability.
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


export default Pearl;
