import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jd1uoob', 'template_7qce2ul', form.current, 'xBdUIRucoZVVHVrHN');
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container conatct__container">
        <div className="contact__options">
          <acticle className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hfaracov321@gmail.com</h5>
            <a href="mailto:hfaracov321@gmail.com" target="_blank">Send a message</a>
          </acticle>
          <acticle className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Hasan Faracov</h5>
            <a href="https://m.me/hesen.faracov" target="_blank">Send a message</a>
          </acticle>
          <acticle className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+994514045780" target="_blank">Send a message</a>
          </acticle>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your Full Name' required/>
          <input type="email" name='email'  placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="7"  placeholder='Your Mesage' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact