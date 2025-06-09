import { useNavigate } from 'react-router-dom';

const FeedbackResults = () => {
    const navigate = useNavigate();

    const results = [
        { topic: "JavaScript Loops", correct: true },
        { topic: "Array Methods", correct: false },
        { topic: "Async/Await", correct: true },
        { topic: "DOM Manipulation", correct: false },
        { topic: "Error Handling", correct: true },
    ];

    const correctAnswers = results.filter(r => r.correct).length;
    const wrongAnswers = results.filter(r => !r.correct).length;

    return (
        <section className="feedback-section">
            <header className="feedback-header">
                <h1>Your Personalized Skill Feedback</h1>
                <p className="feedback-subtext">
                    Clear insights into your strengths and areas to grow. Make your next move smarter.
                </p>
            </header>

            <main className="feedback-main">
                <section className="feedback-summary">
                    <h2>Score Overview</h2>
                    <p>Here’s how you performed in the latest assessment:</p>
                    <div className="score-boxes">
                        <div className="score-box correct-box">
                            <strong>{correctAnswers}</strong>
                            <span>Correct Answers</span>
                        </div>
                        <div className="score-box wrong-box">
                            <strong>{wrongAnswers}</strong>
                            <span>Incorrect Answers</span>
                        </div>
                    </div>
                </section>

                <section className="feedback-topics">
                    <h2>Topic Breakdown</h2>
                    <p>Each topic is listed with its result for better clarity.</p>
                    <ul className="topics-list">
                        {results.map(({ topic, correct }, i) => (
                            <li key={i} className={`topic-item ${correct ? 'pass' : 'fail'}`}>
                                <span>{topic}</span>
                                <span className="status">{correct ? 'Correct' : 'Incorrect'}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {wrongAnswers > 0 && (
                    <section className="practice-suggestions">
                        <h2>Suggested Focus Areas</h2>
                        <p>Strengthen your knowledge by revisiting these:</p>
                        <ul className="practice-list">
                            {results.filter(r => !r.correct).map((r, i) => (
                                <li key={i}>{r.topic}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>

            <footer className="feedback-footer">
                <p className="footer-note">Ready to put your skills to the test again?</p>
                <button className="demo-button" onClick={() => navigate('/signup')}>
                    Try a Demo Task
                </button>
            </footer>
        </section>
    );
};

export default FeedbackResults;
