import React from 'react'
import "../custom-hooks/fetchProjects";
import useFetchProjects from '../custom-hooks/fetchProjects';
export default function Projects() {
    const { isLoading, projects } = useFetchProjects();

    if (isLoading) {
        return <section className='projects'>
            <h2>Loading...</h2>
        </section>
    }

    return (
        <section>
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underlined"></div>
            </div>
            <div className="projects-center">
                {projects.map(project => {
                    const { id, image, url, title } = project;
                    return <a href={url} id={id} key={id} target='_blank' rel='noreferrer' className='project'>
                        <img src={image} alt={title} className='img' />
                        <h5>{title}</h5>
                    </a>
                })}
            </div>
        </section>
    )
}
