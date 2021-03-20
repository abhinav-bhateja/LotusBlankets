import React, {Component} from 'react';

class Resume extends Component {
    render() {


        return (
            <section id="resume">

                <div className="row education vision">
                    <div className="three columns header-col">
                        <h1><span>Our Vision</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                • &nbsp;To hold number one position in the blanket industry.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row education">

                    <div className="three columns header-col">
                        <h1><span>Our Mission</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <ul>
                            <li>• &nbsp;To provide our customers with quality products at a revolutionary price.</li>
                            <li>• &nbsp;To excel in the market through constant improvement.</li>
                            <li>• &nbsp;To make Lotus Blankets a brand known for quality and commitment.</li>
                        </ul>
                    </div>
                </div>

                <div className="row education values">

                    <div className="three columns header-col">
                        <h1><span>Our Values</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <ul>
                            <li>• &nbsp;Commitment to excellence</li>
                            <li>• &nbsp;Commitment to quality</li>
                            <li>• &nbsp;Teamwork</li>
                            <li>• &nbsp;Customer satisfaction</li>
                        </ul>
                    </div>
                </div>


            </section>
        );
    }
}

export default Resume;
