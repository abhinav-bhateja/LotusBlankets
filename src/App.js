import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Fade from "react-reveal/Fade";

import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Footer from "./Components/Footer";

import Emerald from './Components/Products/Emerald';
import Pearl from './Components/Products/Pearl';
import Sapphire from './Components/Products/Sapphire';
import Platinum from './Components/Products/Platinum';
import Diamond from './Components/Products/Diamond';
import Solitaire from './Components/Products/Solitaire';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons'
import {faCertificate} from '@fortawesome/free-solid-svg-icons'
import {faAdjust} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import mink from "./Components/imgs/Mink-Blankets-optimized.jpg";
import logo from "./Components/imgs/logo.png";
import logo2 from "./Components/imgs/Lotus logo.png";

import em from './Components/imgs/Emerald.png';
import pe from './Components/imgs/Pearl.png';
import sa from './Components/imgs/Sapphire.png';
import di from './Components/imgs/Diamond.png';
import pt from './Components/imgs/Platinum.png';

class App extends Component {


    render() {


        return (
            <Router>


                <div className="App">

                    <div id='log' className="logo-bt">

                        <img src={logo2} />

                    </div>

                    <div id='log' className="logo-be">

                        <img src={logo} />

                    </div>





                    <Header/>
                    <About/>
                    <Resume/>


                    <div className="acontainer icon">
                        <div className="arow">

                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faShieldAlt} color={"gold"}
                                                                            size={"lg"}/> &nbsp;CLIENT SATISFACTION
                                    </div>
                                </Fade>

                                At Lotus Blankets, we believe that “A satisfied customer is the best business strategy
                                of all.”
                            </p>
                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faCertificate} color={"gold"}
                                                                            size={"lg"}/> &nbsp;ISO CERTIFICATION
                                    </div>
                                </Fade>

                                Lotus Blankets is ISO 9001:2015 certified.
                            </p>
                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faAdjust} color={"gold"}
                                                                            size={"lg"}/> &nbsp;OUR MOTTO
                                    </div>
                                </Fade>

                                At Lotus Blankets, our motto is providing our customers with quality product at
                                revolutionary prices.
                            </p>
                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faQuestionCircle} color={"gold"}
                                                                            size={"lg"}/> &nbsp;WHY US
                                    </div>
                                </Fade>

                                At Lotus Blankets, we ensure that quality is maintained in every inch of the product.
                                The core policy of the team is ultimate customer satisfaction.
                            </p>
                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faPencilAlt} color={"gold"}
                                                                            size={"lg"}/> &nbsp;PREMIUM QUALITY
                                    </div>
                                </Fade>

                                Lotus Blankets has successfully marketed its name as a prominent manufacturer and
                                supplier of quality mink blankets.
                            </p>
                            <p className="fourr columns">
                                <Fade bottom>
                                    <div className="icons"><FontAwesomeIcon icon={faUser} color={"gold"}
                                                                            size={"lg"}/> &nbsp;OUR TEAM
                                    </div>
                                </Fade>

                                With a team of experienced and qualified professionals, we aim to provide quality
                                products, unique designs and in-time delivery.
                            </p>

                        </div>
                    </div>


                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/Emerald" component={Emerald}/>
                        <Route path="/Pearl" component={Pearl}/>
                        <Route path="/Sapphire" component={Sapphire}/>
                        <Route path="/Platinum" component={Platinum}/>
                        <Route path="/Diamond" component={Diamond}/>
                        <Route path="/Solitaire" component={Solitaire}/>
                    </Switch>


                    <Testimonials/>
                    <Contact/>
                    <Footer/>

                    <div type="button" className="email-bt">
                        <a className="smoothscroll" href="#contact">
                            <div className="text-call">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span>Contact<br/>Us</span>
                            </div>
                        </a>
                    </div>



                </div>
            </Router>
        );
    }
}

function Main() {

    return (

        <section id="products">


            <div className="acontainer">
                <Fade left>

                    <div className="arow">
                        <h1>Our Products</h1>


                        <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">

                            <div className="columns portfolio-item">
                                <Link to='/Pearl'>

                                    <div className="item-wrap">


                                        <img src={pe}/>
                                        <p className="namessss">Pearl Blankets</p>


                                    </div>

                                </Link>

                            </div>

                            <div className="columns portfolio-item">
                                <Link to='/Sapphire'>

                                    <div className="item-wrap">


                                        <img src={sa}/>
                                        <p className="namessss">Sapphire Blankets</p>


                                    </div>

                                </Link>

                            </div>

                            <div className="columns portfolio-item">
                                <Link to='/Emerald'>
                                    <div className="item-wrap">


                                        <img src={em}/>
                                        <p className="namessss">Emerald Blankets</p>


                                    </div>
                                </Link>
                            </div>


                            <div className="columns portfolio-item">
                                <Link to='/Platinum'>

                                    <div className="item-wrap">


                                        <img src={pt}/>
                                        <p className="namessss">Platinum Blankets</p>


                                    </div>

                                </Link>

                            </div>

                            <div className="columns portfolio-item">
                                <Link to='/Solitaire'>

                                    <div className="item-wrap">


                                        <img src={mink}/>
                                        <p className="namessss">Solitaire Branded Blankets</p>


                                    </div>

                                </Link>

                            </div>

                            <div className="columns portfolio-item">
                                <Link to='/Diamond'>

                                    <div className="item-wrap">


                                        <img src={di}/>
                                        <p className="namessss">Diamond Blankets</p>


                                    </div>

                                </Link>

                            </div>



                        </div>
                    </div>

                </Fade>
            </div>

        </section>


    );
}


export default App;
