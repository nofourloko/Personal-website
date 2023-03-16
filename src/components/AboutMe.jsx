import React from 'react'
import '../styles/AboutMe.css'
import Header from './Header'

export default function AboutMe() {
    return(
        <div className='aboutMeContainer'>
            <Header />
            <div className='AboutMeAll'>
            <div className='aboutMe'>
                <div className='aboutMePhoto'>
                </div>
                <div className='aboutMeInfo'>
                <p className='aboutMeName'>Jakub Miśta</p>
                    <p className='aboutMeInfoText'>
                        I'm a Frontend developer with a strong passion about accesibility and testing.
                        I'm incredibly passionate about building and contributing to Web Applications 
                        that matter. I am currently working with HTML5, CSS3, JavaScript ES6 and
                        ReactJS. I'm currently at the programing profile in Zespół Szkół Elektronicznych i 
                        Informatycznych in Sosnowiec. You can find my resume on my Linkedin profile.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
