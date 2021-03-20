import React, {Component} from 'react';
import axios from "axios";

class Contact extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Send Message',

    }


// handle inputs

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

// end of handle inputs


    formSubmit = (e) => {
        e.preventDefault();


        let data = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }


        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log('message not send');

            })


    }

// for reseting the form data
    resetForm = () => {
        this.setState({
            name: '',
            lastname: '',
            message: '',
            email: '',

        })

        setTimeout(() => {
            this.setState({
                sent: false,


            })
        }, 3000)
    }


    render() {


        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">

                        <p className="lead"> Contact Us</p>

                    </div>

                </div>

                <div className="row">
                    <div className="seven columns">

                        <form onSubmit={this.formSubmit}>

                            <div className="singleItem">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="name" value={this.state.name}
                                       onChange={this.handleName} required placeholder="Enter Your Name..."/>
                            </div>

                            <div className="singleItem">
                                <label htmlFor="lastname">Phone Number</label>
                                <input type="text" name="lastname" className="lastname" value={this.state.lastname}
                                       onChange={this.handleLastname} pattern="^\d{10}$" required placeholder="Enter 10 Digit Number..."/>
                            </div>

                            <div className="singleItem">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="email" value={this.state.email}
                                       onChange={this.handleEmail} placeholder="Enter a valid E-Mail..."/>
                            </div>

                            <div className="textArea singleItem">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" value={this.state.message} id="" cols="30" rows="5"
                                          onChange={this.handleMessage} placeholder="Enter your message..."></textarea>
                            </div>


                            <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div>
                            <div className="btn">
                                <button type="submit">Submit</button>
                            </div>


                        </form>
                    </div>

                    <div className="two columns">

                        <h2>Contact</h2>

                    </div>


                    <aside className="three columns footer-widgets">
                        <div className="widget widget_contact">

                            <p className="address">
                                Mr Ankur Singla<br/>
                                +91-9164500000

                                <br/><br/>

                                Mr Vasu Singla <br/>
                                +91-8904600000
                            </p>
                        </div>

                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;
