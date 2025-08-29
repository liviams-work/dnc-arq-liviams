import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrazilFlag from '../../assets/brazil-flag.svg'
import UsaFlag from '../../assets/usa-flag.svg'
import FacebookLogo from '../../assets/facebook.svg'
import TwitterLogo from '../../assets/twitter.svg'
import LinkedinLogo from '../../assets/linkedin.svg'
import InstagramLogo from '../../assets/instagram.svg'

//COMPONENT 
import Button from '../Button/Button'  //isso n esta pegando

//CONTEXT
import { AppContext } from '../../contexts/AppContext' 


function Footer (){
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage (country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">

                    
                    <div className="footer-logo-column">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="_blank">
                              <img src={FacebookLogo} alt="!" />  
                            </a>
                            <a href="https://google.com" target="_blank">
                              <img src={TwitterLogo} alt="!" />  
                            </a>
                            <a href="https://google.com" target="_blank">
                              <img src={LinkedinLogo} alt="!" />  
                            </a>
                            <a href="https://google.com" target="_blank">
                              <img src={InstagramLogo} alt="!" />  
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-column">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3> 
                            <ul>
                                <li ><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey-1-color">
                                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 
                            </p>
                            <p className="grey-1-color">
                               suporte@escoladnc.com.br
                            </p>
                            <p className="grey-1-color">
                               (19) 99187-4342
                            </p>
                        </div>
                    </div>
                </div> 
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="lang-area d-flex">
                       <Button buttonStyle="unstyled" onClick={() => changeLanguage ('br')}>
                        <img src={BrazilFlag} alt="!" height="29px"/>
                        </Button> 
                        <Button buttonStyle="unstyled"  onClick={() => changeLanguage ('en')}> 
                        <img src={UsaFlag} alt="!" height="29px"/>  
                        </Button> 
                    </div>
                </div>         
            </div>
        </footer>
    )
}

export default Footer