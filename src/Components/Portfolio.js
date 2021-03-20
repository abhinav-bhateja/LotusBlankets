import React, {Component} from 'react';
import mink from './imgs/Mink-Blankets-optimized.jpg'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function Portfolio() {

    return (
        <section id="portfolio">

                <div className="twelve columns collapsed">

                    <h1>Our Products.</h1>

                    <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                        <div key="Polar" className="columns portfolio-item">
                            <div className="item-wrap">
                                <img src={mink}/>
                            </div>
                        </div>
                        <div key="Polar" className="columns portfolio-item">
                            <div className="item-wrap">
                                <img src={mink}/>
                            </div>
                        </div>
                        <div key="Polar" className="columns portfolio-item">
                            <div className="item-wrap">
                                <img src={mink}/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}




export default Portfolio;
