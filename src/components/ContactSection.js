import React from 'react';
import '../styles/ContactSection.css';

function ContactSection() {
    return (
        <section className="section-4" id="section4">
            <h1 className="contact-header">Contact</h1>
            <form className="contact-form">
                <input placeholder="First Name" id="firstname" autocomplete="off"></input>
                <input placeholder="Last Name" id="lastname" autocomplete="off"></input>
                <input placeholder="Email" id="email" autocomplete="off"></input>
                <textarea placeholder="Message" id="message" autocomplete="off"></textarea>
            </form>
            <a className="btn-4" id="submit">Submit</a>
        </section>
    );
  
}
  
export default ContactSection;