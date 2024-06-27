import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>My Portfolio</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <section id="about" className={styles.section}>
                    <h2>About Me</h2>
                    <p>
                        Write a brief introduction about yourself, your background, and your
                        career goals.
                    </p>
                </section>

                <section id="projects" className={styles.section}>
                    <h2>Projects</h2>
                    <div className={styles.projects}>
                        {/* Add your project details here */}
                        <div className={styles.project}>
                            <h3>Project Title</h3>
                            <p>Brief description of the project.</p>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                        {/* Add more project divs as needed */}
                    </div>
                </section>

                <section id="skills" className={styles.section}>
                    <h2>Skills</h2>
                    <ul className={styles.skills}>
                        {/* Add your skills here */}
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        {/* Add more skills as needed */}
                    </ul>
                </section>

                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    <p>
                        Provide your contact information (email, social media links, etc.).
                    </p>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Your Name</p>
            </footer>
        </div>
    );
};

export default Portfolio;