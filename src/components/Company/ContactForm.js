import React from 'react';
import "../styles/EditCompany.css"

function ContactForm() {
  return (
      <>
        <div className="container1">
          <p>CONTACT US</p>

          <div className="login">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="text" placeholder="Your Email Address" className="input" />
          </div>

          <div className="subject">
            <input type="text" placeholder="Subject" className="input" />
          </div>

          <div className="msg">
            <textarea  className="area" placeholder="Leave a Message"></textarea>
          </div>

          <div className="btn-2">Send Message</div>
        </div>
      </>
  );
}

export default ContactForm;