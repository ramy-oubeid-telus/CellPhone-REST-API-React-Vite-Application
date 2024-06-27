import React from 'react';

const Skills: React.FC = () => {
    const skills: string[] = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
