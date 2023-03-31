import React, { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser'
import Modal from 'react-modal'
import './contact.css'

function Contact() {

  const [openModal, setOpenModal] = useState(false)
  const handleSubmit = (e) => { 
    e.preventDefault()
    setOpenModal(!openModal)
   }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i3ju5ig', 'template_bxj47oj', form.current, '1Szx3w0IWaXE-XfsC')
      .then((result) => {
          console.log(result.text);
          console.log('msg sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const { ref: contactRef, inView: contactVisible } = useInView()

  return (
    <div className='contact' id='contact'>
      <h1 className='contact__header'>Contact Me</h1>
      <div ref={contactRef} className={`contact__header__underline ${contactVisible ? 'contact__visible' : ''}`}></div>
      <form ref={form} className={`message__container`} onSubmit={e => { sendEmail(e); handleSubmit(e); }}>
        <h3 className='message__header'>New Message</h3>
        <input type="text" name="user_name" placeholder='Name' />
        <div className="divider"></div>
        <input type="email" name="from_name" placeholder='Email' />
        <div className="divider"></div>
        <textarea name="message" placeholder='Message' />
        <div className="divider"></div>
        <button className='submit__button' type="submit" value="Send">Send</button>
      </form>
      <div className="contact__modal__container">
        <Modal className='contact__modal' isOpen={openModal} closeTimeoutMS={100} ariaHideApp={false}>
          <button onClick={handleSubmit}>×</button>
          <div className="animation__container">
            <img className='checkmark' src="assets/checkmark.svg" alt="Checkmark" />
            <h1>Email Delivered!</h1>
            <h2>Expect a response in 1-3 business days.</h2>
          </div>
          <div className="checkmark__cover"></div>
          <div className='email__received__cover'></div>
          <div className='response__time__cover'></div>
        </Modal>
      </div>
    </div>
  )
}

export default Contact