import React from 'react';
import Banner from "../componentes/Banner/Banner"
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"
import ContactForm from "../componentes/ContactForm/ContactForm"
import { useContext } from 'react';


//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact (){
    const appContext = useContext(AppContext)
    return(
        <>
           <Header/>
            <div className="Contact">
            <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />
            <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact