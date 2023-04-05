import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser'
import Modal from 'react-modal'
import axios from 'axios'
import './contact.css'

function Contact() {

  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState(null)
  const form = useRef();

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:8000/mail' }
    axios.request(options).then((res) => {
      setData(res.data)
      console.log(data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const handleSubmit = (e) => { 
    e.preventDefault()
    setOpenModal(!openModal)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(data.serviceId, data.templateId, form.current, data.key)
      .then((res) => {
          console.log(res.text)
          e.target.reset()
      }, (err) => {
          console.log(err.text)
      })
  }

  const { ref: contactRef, inView: contactVisible } = useInView({ triggerOnce: true })

  return (
    <div className='contact' id='contact'>
      <div className="shadow"></div>
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