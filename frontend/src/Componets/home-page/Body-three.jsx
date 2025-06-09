import React from 'react';

const Bodythree = ({ onStart }) => {
    const cards = [
        {
            title: 'Frontend Developer',
            category: 'frontend',
            description: 'Build user-facing applications with beautiful and responsive interfaces.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS']
        },
        {
            title: 'Backend Developer',
            category: 'backend',
            description: 'Develop scalable server-side logic, APIs, and database integrations.',
            techStack: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'JWT', 'REST API']
        },
        {
            title: 'Fullstack Developer',
            category: 'fullstack',
            description: 'Combine frontend and backend to build end-to-end web applications.',
            techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'API Integration']
        }
    ];

    return (
        <div className="card-container">
            <h1 className="section-title">Welcome to the Skill Assessment Section</h1>
            <p className="section-subtitle">
                This test module is designed to evaluate your technical proficiency, problem-solving abilities,
                and project thinking skills across various developer roles.
            </p>
            <p className="section-subtitle">
                Each role-specific test includes multiple sections:
            </p>
            <ul className="section-details">
                 <strong>MCQ:</strong> Assess your understanding of core concepts, syntax, and best practices. <br />
                <strong>Coding:</strong> Solve real-time algorithmic or functional problems using your preferred language. <br />
                 <strong>Project Task:</strong> Analyze a small project brief and deliver a practical implementation strategy. <br />
            </ul>
            <p className="section-subtitle">
                Select your preferred track below to begin your test. The assessment is timed and must be completed in fullscreen mode.
            </p>

            <div className="cards-grid">
                {cards.map((card) => (
                    <div key={card.category} className="body-card">
                        <h2>{card.title}</h2>
                        <p className="card-description">{card.description}</p>

                        <div className="tech-stack">
                            <strong>Tech Stack:</strong>
                            <ul className="tech-tags">
                                {card.techStack.map((tech, index) => (
                                    <li key={index} className="tech-tag">{tech}</li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={() => onStart(card.category)}
                        >
                            Start
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bodythree;
