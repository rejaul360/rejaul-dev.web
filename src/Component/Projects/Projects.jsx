import React, { useEffect, useState } from 'react';
import ShowProject from '../ShowProject/ShowProject';

const Projects = () => {

    const [projects, setProject]= useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProject(data)
        })
    },[])
    return (
        <div id='project' className=' md:p-10 mb-8'>
            <h5 className="text-3xl py-2 text-center text-white">
                My Projects
            </h5>
            <h2 className='text-center mb-12 text-xl text-white'>Desing & Development</h2>

            <div className='px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ' >
                {
                    projects.map(project => <ShowProject
                    key={project.id}
                    project={project}
                    >

                    </ShowProject>)
                }
            </div>
        </div>
    );
};

export default Projects;