import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact =()=> {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k3mn0oc', 'template_j24dnal', form.current, 'P1zxdItKIY0U_Z_X9')
    e.target.reset()
  }
  return (
    <section id='contact'>
     <h5>Get IN Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
          <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>pallavicops @gmail.com</h5>
          <a href="mailto:pallavicops@gmail.com" target='blank'>Send a message</a>
        </article>
        <article className='contact_option'>
          <PiMessengerLogoBold className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>pallavicops</h5>
          <a href="https://www.instagram.com/p_a_ll_a_v_ithakur/" target='blank'>Send a message</a>
        </article>
        <article className='contact_option'>
          <ImWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9035321847</h5>
          <a href="https://api.whatsapp.com/send?phone=9035321847" target='blank'>Send a message</a>
        </article>

      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
