import React, { children } from 'react';
import { createContext, useState, useEffect } from 'react';
import { getApiData } from "../services/apiServices"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br')  //setando um estado para ser compartilhado na app inteira (context)
    //savedLanguage ?? = se n existir um idioma salvo q o usuario selecionou antes, usa o br como padrao
    const [languages, setLanguages] = useState() //armazenar a resposta da api de idiomas 
    const [loading, setLoading] = useState(true) //comeca carregando e n ao contrario

    useEffect(() => {
        const fetcLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch (e){
                console.error(e)
            } finally {
                setLoading(false)
            }

        }
        fetcLanguages()
    }, []) //array vazio, so roda 1x

    useEffect(() => {
    localStorage.setItem('lang', language)
}, [language]) // vai rodar as opcoes, salvar a selecionada e rodar novamente com a selecionada


return(
    <AppContext.Provider value={{ language, languages, setLanguage, loading}}>
        {children}
    </AppContext.Provider>
)
}