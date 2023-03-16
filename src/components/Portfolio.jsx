import React, {useState} from 'react'
import Header from './Header'
import '../styles/portfolio.css'
import Project1Image from '../assets/Project1.png'
import back from '../assets/left-chevron.png'
import forward from '../assets/right-chevron.png'
import Projekt2 from "../assets/Projekt2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
export default function Portfolio({page}) {
  const [displayInfo, setDisplayInfo] = useState(false)
  const [infoText, setInfoText] = useState("Show information")
  const [projects, setProjects] = useState([
    {
      title : "Games Planet",
      desc : ` 
      Games Planet is a website with three games 
      such as BlackJack, Hangman and Tic Tac Toe build with ReactJS.
      It has a stripe payment method to buy points and
      uses FireBase to register and store user data`,
      link : "https://gamesplanet.netlify.app",
      img : Project1Image
    },
    {
      title : "Speed Typing",
      desc : ` 
      It is an app build with ReactJS, which counts how many word you typed in a period of time`,
      link : "https://speedtypingjm.netlify.app/",
      img: Projekt2
    }
  ])
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    if(currentProject === projects.length - 1){
      setCurrentProject(0)
    }else 
      setCurrentProject(prevValue => prevValue + 1)
  }
  const prevProject = () => {
    if(currentProject === 0){
      setCurrentProject(projects.length - 1)
    }else 
      setCurrentProject(prevValue => prevValue - 1)
  }
  return (
    <div className='PortfolioContainer'>
      <Header />
      <p className='portfolioTittle'>Portfolio</p>
      <div className='ProjectsPortfolio'>
        <p className='ProjectTittle'>{projects[currentProject].title}</p>
        <div className='PortfolioImageContainer'>
          <FontAwesomeIcon icon={faBackward} onClick = {() => {
            prevProject()
            setDisplayInfo(false)
            }} />
        <div>
        {!displayInfo ?
        <div>
          <img
            src={projects[currentProject].img} 
            alt = "Project" 
            className='ProjectImage'
            />
            </div>:
                <div className='ProjectImageInfo' >
                  <p>
                    {projects[currentProject].desc}
                  </p>
                </div>
              }
        </div>
          <FontAwesomeIcon icon={faForward}  onClick = {() => {
            nextProject()
            setDisplayInfo(false)
            }} />
        </div>
        <a href={projects[currentProject].link} target= '_blank'>Visit Website</a>
        <p onClick={() => {
          if (displayInfo === true){
            setDisplayInfo(false)
            setInfoText("Show information")
          }else{
            setDisplayInfo(true)
            setInfoText("Close infromation")
          }
          
        }}>{infoText}</p>
      </div>
    </div>
  )
}
