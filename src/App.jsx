import React, {useState, useContext} from "react";
import MainPage from './components/MainPage'
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import { nextPageContext } from "./Context/newPage";
import "./styles/App.css"
import {
    Animator,
    Fade, 
    ScrollContainer, 
    ScrollPage, Sticky, 
    Zoom, 
    MoveOut, 
    batch,
    ZoomIn,
    Move
  } from 'react-scroll-motion'
import { Route , Routes} from "react-router-dom";
import Contact from "./components/Contact";
  
  const ZoomInScrollOut = batch(Sticky(),Fade(),ZoomIn())
  const FadeUp = batch(Fade(), Sticky(),Move())
  const App = () => {
  const {setNextPage, nextPage} = useContext(nextPageContext)
  
    return(
      <div>
        {!nextPage ? 
        <div>
        <ScrollContainer >
          <ScrollPage >
            <Animator style={{width: '100vw'}}  animation={batch(Sticky(),Fade(), MoveOut(0, -200))}>
                <MainPage />
            </Animator>
          </ScrollPage>
          <ScrollPage >
            <Animator style={{width: '100vw'}} animation={Move()}>
              <Portfolio />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        </div>:

        <Routes>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path ="/contact" element = {<Contact />}/>
          <Route path="/" element = {<MainPage/>}/>
          <Route path = "/aboutme" element = {<AboutMe/>}/>
        </Routes>}
      </div>
    )
}

export default App