import React, { useRef, useState} from 'react'
import '../styles/Contact.css'
import '../styles/spinner.css'
import Header from './Header'
import emailjs from '@emailjs/browser';
import instagramLogo from '../assets/instagram-logo.png'
import facebookLogo from '../assets/facebook.png'
import gitHubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'

export default function () {
    const form = useRef()
    const [disable, setDisable] = useState(false)
    const [messageSent, setMessageSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setDisable(true)
        console.log('test')
        emailjs.sendForm('service_porwg5h', 'template_e23r9jj', form.current, 'upn2o75NPu9S7Lm5f')
          .then((result) => {
              console.log(result.text)
              form.current.reset()
              setDisable(false)
              setMessageSent(true)
          }, (error) => {
              console.log(error.text)
          })
      }

  return (
    <div className='ContactContainer'>
    <Header /> 
    <div className='contactInfo'>
        <div className='Socials'>
            <p>YOU CAN ALSO FIND ME THERE</p>
            <div className='socialsLinks'>
               <a href='https://www.instagram.com/nofourloko/'  target= '_blank'><img src={instagramLogo}/></a>
               <a href='https://www.facebook.com/profile.php?id=100019443180628'  target= '_blank'><img src={facebookLogo}/></a>
               <a href='https://github.com/nofourloko'  target= '_blank'><img src={gitHubLogo}/></a>
               <a href='https://www.linkedin.com/in/jakub-mi%C5%9Bta-56a728260/'  target= '_blank'><img src={linkedinLogo}/></a>
            </div>
        </div>
        {!messageSent ?
        <form ref={form} onSubmit={sendEmail} className = "contactForm">
        <label>DROP ME A LINE AND I'LL BE IN TOUCH</label>
        <div className='contactFormInfo'>
            <input 
                type="text" 
                name="user_name" 
                placeholder='Name' 
                className='inputInfo' 
                required 
                disabled = {disable}/>
            <input 
                type="email" 
                name="user_email" 
                placeholder='Email' 
                className='inputInfo' 
                required 
                disabled = {disable}/>
        </div>
            <textarea 
                name="message" 
                placeholder='Your message' 
                className='inputMessage' 
                required 
                disabled = {disable}/>
        {!disable ?
        <input 
            type="submit" 
            value="SEND MESSAGE"  
            className='submitButton' 
            disabled = {disable}/> : 
        <div className='loading-spinner'>
        </div>}     
        </form>:
        <div className='messageSent'>
            <p className='messageSentText'>MESSAGE HAS BEEN SENT</p>
            <div>
            <button 
                className='buttonMessageSent' 
                onClick={() => setMessageSent(false)}>Write a new message</button>
            </div>
        </div>}
    </div>
    </div>
  )
}
