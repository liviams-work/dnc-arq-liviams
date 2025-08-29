import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation ()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])  //side effect  fazer a pag rolar para o comeco quando pudar de pagina

    return null
}

export default ScrollToTop