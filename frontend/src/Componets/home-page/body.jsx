import React from 'react';

const Body = () => {
    return (
        <section className="body-one">
            <div className="body-content">
                <div className="text-area">
                    <h1 className="main-title">
                        Unlock Your True <br /> Skill Level!
                    </h1>
                    <p className="subtitle">
                        Take role-based assessments tailored to your career path,
                        complete with detailed, actionable feedback.
                    </p>
                    <ul className="features-list">
                        <li><strong>Test:</strong> Challenge yourself with real-world scenarios.</li>
                        <li><strong>Learn:</strong> Understand your strengths and areas for improvement.</li>
                        <li><strong>Improve:</strong> Get guided recommendations and keep growing.</li>
                    </ul>
                    <a href="#" className="btn-primary">
                        Start Assessment
                    </a>
                </div>
                <div className="image-area">
                    <img src="/test-img.svg" alt="Assessment Illustration" />
                </div>
            </div>
        </section>
    );
};

export default Body;
