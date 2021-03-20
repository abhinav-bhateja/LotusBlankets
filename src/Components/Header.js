import React, {Component} from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import img1 from './imgs/corousel1.png';
import img2 from './imgs/corousel2.png';
import img3 from './imgs/corousel3.jpg';
import img4 from './imgs/corousel4.png';

class Header extends Component {

    render() {

        const AutoplaySlider = withAutoplay(AwesomeSlider);

        return (


            <header id="home">

                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                    bullets={false}
                    organicArrows={false}
                    fillParent={true}
                    style={{zIndex: -1}}
                >
                    <div data-src={img1}/>
                    <div data-src={img2}/>
                    <div data-src={img3}/>
                    <div data-src={img4}/>
                </AutoplaySlider>

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About Us</a></li>
                        <li><a className="smoothscroll" href="#resume">Why us?</a></li>
                        <li><a className="smoothscroll" href="#products">Products</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Reviews</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
                    </ul>

                </nav>


                {/* <div className="mainBlur">

                    <h3>A Class Apart In Design, Quality & Finish!</h3>

                </div> */}


                <div className="row banner">


                    <div className="banner-text">

                        {/*<h1 className="responsive-headline"><Fade bottom>Lotus Blankets</Fade></h1>*/}

                        {/*<Fade bottom>*/}
                        {/*   */}
                        {/*</Fade>*/}

                        {/*<hr/>*/}
                        {/*<ul className="social">*/}
                        {/*    <li><a href={"https://www.instagram.com/lotusblankets/"}><i*/}
                        {/*        className={"fa fa-instagram"}></i></a></li>*/}
                        {/*    <li><a href={"mailto:managemicrointernational@gmail.com"}><i*/}
                        {/*        className={"fa fa-envelope"}></i></a></li>*/}
                        {/*    <li><a href={"https://www.facebook.com/lotusblankets.microinternational/"}><i*/}
                        {/*        className={"fa fa-facebook"}></i></a></li>*/}
                        {/*</ul>*/}



                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
