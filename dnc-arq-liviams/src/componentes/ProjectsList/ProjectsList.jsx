import React from 'react';
import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'


//ASSETS
import LikeFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'

//UTILS
import { getApiData } from '../../services/apiServices';
import Projects from '../../pages/Projects';

//COMPONETS
import Button from '../Button/Button';

//CONTEXT
import { AppContext } from '../../contexts/AppContext' 

function ProjectsList (){
    const appContext = useContext(AppContext)
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProjects] = useState([])

    const handleSavedProjects = (id) => {
            setFavProjects((prevFavProjects) => {
                if (prevFavProjects.includes(id)) {
                    const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                    sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                    return prevFavProjects.filter((projectId) => projectId !== id)

                } else {
                    sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                    return [...prevFavProjects, id]
                }
            })
        }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData ('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => { //salvar o valor em um lugar msm sem rotas (sessionStorage) so funciona para uma sessao, se sair e reiniciar, ele sai mas permanece se vc permanecer usando a app
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))

        if (savedFavProjects) {
            setFavProjects(savedFavProjects)
        }
    }, [])

    return(
        <div className="projects-section" >
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div> 
            <div className="projects-grid">
                {
                    projects ?
                    projects.map((project) =>(
                        <div key={project.id}>
                            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                            <div 
                                className="thumb tertiary-background"
                                style={{backgroundImage: `url(${project.thumb})`}}
                            ></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ? LikeFilled :LikeOutline}  height="20px"/>
                            </Button>
                            
                        </div>
                        </div>
                    ))
                :
                null              
                }
            </div>
        </div>
    )
}

export default ProjectsList