import React from 'react';
import Banner from "../componentes/Banner/Banner"
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"
import ProjectsList from "../componentes/ProjectsList/ProjectsList"
import { useContext } from 'react';

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Projects (){
     const appContext = useContext(AppContext)
    return(
        <>
           <Header/>
        <div className="container">
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
            <ProjectsList/>
        </div>
        <Footer/>
        </>
    )
}

export default Projects