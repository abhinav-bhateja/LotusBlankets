import React, {Component} from 'react';
import about from './imgs/about us.jpg';
import sign from './imgs/sign.png';

import Fade from "react-reveal/Fade";

class About extends Component {
    render() {

        return (
            <section id="about">
                <div className="row">
                    <div className="five columns">
                        <Fade left>
                            <img src={about} alt="About Us" className="profile-pic"></img>
                        </Fade>

                    </div>
                    <div className="seven columns main-col">
                        <Fade bottom>
                            <h2><span className="ab">Ab</span>out Us</h2>
                        </Fade>


                        <div className="row">
                            <div className="columns">
                                <Fade bottom>

                                    <p className="address">
                                        Lotus Blankets is a brand of the progressive and dynamic Micro International, a
                                        Karnal,
                                        Haryana (India) based ISO 9001:2015 certified company. Four years ago, in 2015, we
                                        started
                                        working as a manufacturer and with complete focus over supreme quality blankets
                                        production, we made our reputation stronger. Mr. Vinay Singla and Mr. Ankur Singla
                                        are the
                                        two heads, who are taking every big step for company’s success.
                                    </p>

                                    <p className="address">

                                        Our Mink Blankets, Luxury Mink Blankets, Super Soft Mink Blankets and AC Blankets
                                        are
                                        seamless in finish and design. With a production capacity of 300 MT per month, the
                                        manufacturing unit is equipped with modern and updated machinery.

                                    </p>

                                </Fade>



                                <img src={sign} alt="signature" className="sign"></img>

                            </div>
                        </div>


                    </div>
                </div>

                {/*<img src={plant} className="plant"/>*/}

            </section>
        );
    }
}

export default About;
