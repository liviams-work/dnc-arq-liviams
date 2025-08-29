import React from 'react';
import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"
import Hero from "../componentes/Hero/Hero"
import ProjectsList from "../componentes/ProjectsList/ProjectsList"

function Home (){
    return(
        <>
        <Header/>
        <div className="container">
            <Hero />
            <ProjectsList/>
        </div>
        <Footer/>
        </>
    )
}

export default Home