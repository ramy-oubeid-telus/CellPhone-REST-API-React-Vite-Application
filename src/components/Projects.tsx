import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        { id: 1, title: 'Project 1', description: 'Description for project 1' },
        { id: 2, title: 'Project 2', description: 'Description for project 2' },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
