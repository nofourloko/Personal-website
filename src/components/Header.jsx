import React, {useContext} from "react";
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import HomePng from '../assets/home.png'
import { nextPageContext } from '../Context/newPage'
const Header = () => {
    const {nextPage, setNextPage} = useContext( nextPageContext )
    return(
        <div className = "Header">
            <div className="leftSide">
                <Link className="link" to = "/portfolio" onClick={() => setNextPage(true)}>
                    <div 
                        className="headerPTag"
                    >
                        <p>Portfolio</p>
                    </div>
                </Link>
                <Link className="link"to = "/aboutme" onClick={() => setNextPage(true)}>
                <div 
                    className="headerPTag" 
                >
                    <p>About Me</p>
                </div>
                </Link>   
                <Link className="link" to = "/contact" onClick={() => setNextPage(true)} >
                <div 
                    className="headerPTag" 
                >
                    <p>Reach Me</p>
                </div>
                </Link>

            </div>
                 <div 
                    to = "/"
                    className="headerIcon" 
                    onClick={() => setNextPage(false)}
                >
                    <Link to = ''>
                        <img src={HomePng } />
                    </Link>  
                </div>    
        </div>
    )
}

export default Header