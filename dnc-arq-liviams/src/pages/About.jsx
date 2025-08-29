import React from 'react';
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"
import Banner from "../componentes/Banner/Banner"
import AboutText from "../componentes/AboutText/AboutText"
import { useContext } from 'react';

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function About (){
     const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
        
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer/>
        </>
    )
}

export default About