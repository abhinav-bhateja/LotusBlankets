import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    render() {


        return (
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="four columns ">
                                <div className="firstt">
                                    <h4>OUR CATEGORIES</h4>


                                    <p><a className="smoothscroll" href="#products">Emerald Blankets</a></p>

                                    <p><a className="smoothscroll" href="#products">Pearl Blankets</a></p>

                                    <p><a className="smoothscroll" href="#products">Diamond Blankets</a></p>

                                    <p><a className="smoothscroll" href="#products">Platinum Blankets</a></p>

                                    <p><a className="smoothscroll" href="#products">Sapphire Blankets</a></p>

                                    <p><a className="smoothscroll" href="#products">Solitaire Branded Blankets</a></p>


                                </div>
                            </div>

                            <div className="four columns">
                                <div className="secondd">
                                    <h4> Navigate</h4>
                                    <ul>
                                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                                        <li><a className="smoothscroll" href="#about">About Us</a></li>
                                        <li><a className="smoothscroll" href="#resume">Why us?</a></li>
                                        <li><a className="smoothscroll" href="#products">Products</a></li>
                                        <li><a className="smoothscroll" href="#testimonials">Reviews</a></li>
                                        <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="four columns">
                                <div className="third">
                                    <h4> Contact Us</h4>
                                    <ul>
                                        <li>Village Alipur Khalsa, Tehsil Gharaunda, Karnal - 132103, Haryana, India
                                        </li>
                                        <li></li>
                                        <div id="map-container-google-1" className="z-depth-1-half map-container-6">
                                            <iframe classname="map1"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.328969585079!2d76.99575631429825!3d29.477598982092008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd9617fc19581%3A0x46f69bc0998893e2!2sLOTUS%20BLANKETS!5e0!3m2!1sen!2sin!4v1598203963152!5m2!1sen!2sin"
                                                frameBorder="0" allowFullScreen></iframe>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="twelve">
                                <div className="line"></div>
                                <div className="second2">
                                    <a href="https://www.facebook.com/lotusblankets.microinternational/" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
                                    </a>
                                    <a href="https://www.instagram.com/lotusblankets/" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>
                </div>

            </footer>
        );
    }
}

export default Footer;
