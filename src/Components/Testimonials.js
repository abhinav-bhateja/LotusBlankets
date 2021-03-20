import React, {Component} from 'react';

class Testimonials extends Component {
    render() {


        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">

                        <div className="two columns header-col">
                            <h1><span>Our Top Reviews</span></h1>
                        </div>

                        <div className="ten columns flex-container">
                            <ul className="slides">
                                <li>
                                    <blockquote>
                                        <p>
                                            I received Lotus Blanket as a gift from my friend. The supersoft touch of the blanket makes sleeping a real pleasure.
                                            It is washable and durable. I would totally recommend it to others.
                                        </p>
                                        <cite>Mehak Dhuria</cite>
                                    </blockquote>
                                </li>
                                <li>
                                    <blockquote>
                                        <p>
                                            The collection at Lotus Blankets is wide with different colours and patterns to select from.
                                            I bought a sapphire blanket for myself and it keeps me warm.
                                            It is perfect if you want to use it as a throw in your living room.
                                        </p>
                                        <cite>Naisha Gupta</cite>
                                    </blockquote>
                                </li>
                                <li>
                                    <blockquote>
                                        <p>
                                            I gifted Pearl Blanket to my sister. It is so soft to use, machine washable and can also be used as a throw.
                                        </p>
                                        <cite>Yukti Thareja</cite>
                                    </blockquote>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
