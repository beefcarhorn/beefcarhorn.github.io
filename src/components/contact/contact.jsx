import React, { useState } from 'react'
import './contact.css'
import Modal from 'react-modal'

function Contact() {

  const [openModal, setOpenModal] = useState(false)
  const handleSubmit = (e) => { 
    e.preventDefault()
    setOpenModal(!openModal)
   }

  return (
    <div className='contact' id='contact'>
      <h1 className='contact__header'>Contact Me</h1>
      <div className="message__container">
        <div className="message__header">
          <h3>New Message</h3>
        </div>
        <div className="message__recipient">
          <h3>To</h3>
          <h3 className='message__recipient__email'>aidan.poor123@gmail.com</h3>
        </div>
        <div className="divider"></div>
        <div className="message__author">
          <h3>From</h3>
          <input type="text" placeholder='Author'></input>
        </div>
        <div className="divider"></div>
        <div className="message__subject">
          <input type="text" placeholder='Subject'></input>
        </div>
        <div className="divider"></div>
        <div className="message">
          <textarea type="text" placeholder='Message'></textarea>
        </div>
        <div className="message__actions">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
      <div className="contact__modal__container">
        <Modal className='contact__modal' isOpen={openModal} closeTimeoutMS={200}>
          <button onClick={handleSubmit}>×</button>
          <div className="animation__container">
            <img className='checkmark' src="assets/checkmark.svg" alt="Checkmark" />
          </div>
            <div className="checkmark__cover"></div>
        </Modal>
      </div>
    </div>
  )
}

export default Contact